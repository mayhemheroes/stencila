const path = require('path')

const fs = require('fs-extra')
const jstt = require('json-schema-to-typescript')
 
const options = {
  bannerComment: `/* tslint:disable */
/**
 * This file was automatically generated by \`schema-to-typescript.js\`.
 * Do not modify it by hand. Instead, modify the source \`.schema.json\` file
 * in the \`schema\` directory and run \`node schema-to-typescript.js\`
 * to regenerate this file.
 */`
}

fs.mkdirp('ts')
const src = 'schema/index.schema.json'
const dest = 'ts/index.ts'
console.log(`Generating "${dest}" from "${src}"`)
jstt.compileFromFile(src, options).then(ts => fs.writeFileSync(dest, ts))
