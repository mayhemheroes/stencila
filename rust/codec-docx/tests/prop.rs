use codec::{utils::vec_string, CodecTrait};
use codec_docx::DocxCodec;
use test_props::{article, proptest::prelude::*, Freedom};
use test_utils::{
    assert_json_eq,
    common::{once_cell::sync::Lazy, tempfile, tokio},
};

static RUNTIME: Lazy<tokio::runtime::Runtime> =
    Lazy::new(|| tokio::runtime::Runtime::new().unwrap());

proptest! {
    #![proptest_config(ProptestConfig::with_cases(30))]

    #[test]
    fn test(input in article(
        Freedom::Min,
        [
            DocxCodec::spec().unsupported_types,
            vec_string![
                // Pandoc replaces the media object with the description if
                // it can not find the file. So exclude these types from the test.
                "AudioObject", "ImageObject", "VideoObject",
                // Skipping these until fully developed
                "Call", "Include"
            ]
        ].concat(),
        DocxCodec::spec().unsupported_properties
    )) {
        RUNTIME.block_on(async {
            let file = tempfile::NamedTempFile::new().unwrap();
            let path = file.path();
            DocxCodec::to_path(&input, path, None).await.unwrap();
            let output = DocxCodec::from_path(path, None).await.unwrap();
            assert_json_eq!(input, output)
        })
    }
}
