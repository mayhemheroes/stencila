use std::path::PathBuf;

use thiserror::Error;

use common::{
    chrono::{Duration, Utc},
    serde::{Deserialize, Serialize},
    serde_with::skip_serializing_none,
};

pub const YEAR_SECONDS: i64 = 31556952;

/// JSON Web Token claims
///
/// Where appropriate we used existing, registered claim names from
/// https://www.iana.org/assignments/jwt/jwt.xhtml#claims and in other
/// cases keep three letter convention in serialization to keep payload
/// sizes as small as possible.
#[skip_serializing_none]
#[derive(Debug, Default, Serialize, Deserialize)]
#[serde(crate = "common::serde")]
pub struct Claims {
    /// The expiry time of the permissions
    ///
    /// The `verify` function requires that this be present. Defaults
    /// to one year in future.
    pub exp: i64,

    /// JSON Web Token identifier
    ///
    /// Used to prevent replay attacks (using single-use tokens more than once).
    pub jti: Option<String>,

    /// The username of the user
    pub usn: Option<String>,

    /// The name of the project
    pub prn: Option<String>,
}

/// Custom server errors
///
/// Implements `warp::reject::Reject` so we can provide custom response messages
/// for example, when authorization fails.
#[derive(Debug, Error)]
pub enum JwtError {
    #[error("no token supplied")]
    NoTokenSupplied,

    #[error("authorization scheme is not 'Bearer'")]
    IncorrectAuthorizationScheme,

    #[error("attempted to reuse a single-use token")]
    Reuse,

    #[error("JSON Web Token error {message}")]
    TokenError { message: String },
}

impl warp::reject::Reject for JwtError {}

impl From<jsonwebtoken::errors::Error> for JwtError {
    fn from(error: jsonwebtoken::errors::Error) -> Self {
        JwtError::TokenError {
            message: error.to_string(),
        }
    }
}

/// Extract a JSON Web Token from an authorization header
pub fn from_auth_header(header: String) -> Result<String, JwtError> {
    if header.len() <= 7 || !header[..7].eq_ignore_ascii_case("bearer ") {
        return Err(JwtError::IncorrectAuthorizationScheme);
    }
    Ok(header[7..].trim().to_string())
}

/// Dump a JSON Web Token to an authorization header
pub fn to_auth_header(jwt: String) -> String {
    format!("Bearer {}", jwt)
}

/// Encode a JSON Web Token
pub fn encode(
    key: &str,
    project: Option<PathBuf>,
    expiry_seconds: Option<i64>,
    single_use: bool,
) -> Result<String, JwtError> {
    let exp = Utc::now()
        .checked_add_signed(Duration::seconds(expiry_seconds.unwrap_or(YEAR_SECONDS)))
        .expect("valid timestamp")
        .timestamp();

    let jti = if single_use {
        Some(uuids::generate("to").to_string())
    } else {
        None
    };

    let prn = project.map(|path| path.to_string_lossy().to_string());

    let claims = Claims {
        exp,
        jti,
        prn,
        ..Default::default()
    };

    match jsonwebtoken::encode(
        &jsonwebtoken::Header::new(jsonwebtoken::Algorithm::HS512),
        &claims,
        &jsonwebtoken::EncodingKey::from_secret(key.as_bytes()),
    ) {
        Ok(token) => Ok(token),
        Err(error) => Err(error.into()),
    }
}

/// Decode a JSON Web Token
pub fn decode(jwt: &str, key: &str) -> Result<Claims, JwtError> {
    match jsonwebtoken::decode::<Claims>(
        jwt,
        &jsonwebtoken::DecodingKey::from_secret(key.as_bytes()),
        &jsonwebtoken::Validation::new(jsonwebtoken::Algorithm::HS512),
    ) {
        Ok(data) => Ok(data.claims),
        Err(error) => Err(error.into()),
    }
}
