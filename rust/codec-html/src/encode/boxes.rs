//! Encode `Box<>`s to HTML

use super::{EncodeContext, ToHtml};

impl<Type> ToHtml for Box<Type>
where
    Type: ToHtml,
{
    fn to_html(&self, context: &EncodeContext) -> String {
        self.as_ref().to_html(context)
    }
}
