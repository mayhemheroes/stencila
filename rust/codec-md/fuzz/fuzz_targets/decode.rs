#![no_main]
use libfuzzer_sys::fuzz_target;

use codec::CodecTrait;
use codec_md::MdCodec;

fuzz_target!(|data: &str| {
    _ = <MdCodec as CodecTrait>::from_str(data, None);
});
