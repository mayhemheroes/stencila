/// Generate a secret key for signing and verifying JSON Web Tokens and HMACs.
///
/// Returns a secret comprised of 64 URL and command line compatible characters
/// (e.g. so that it can easily be entered on the CLI e.g. for a `--key` option ).
///
/// Uses 64 bytes because this is the maximum size possible for JWT signing keys.
/// Using a large key for JWT signing reduces the probability of brute force attacks.
/// See <https://auth0.com/blog/brute-forcing-hs256-is-possible-the-importance-of-using-strong-keys-to-sign-jwts/>.
pub fn generate() -> String {
    use rand::Rng;
    const CHARSET: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                            abcdefghijklmnopqrstuvwxyz\
                            0123456789";
    let mut rng = rand::thread_rng();
    (0..64)
        .map(|_| {
            let idx = rng.gen_range(0..CHARSET.len());
            CHARSET[idx] as char
        })
        .collect()
}