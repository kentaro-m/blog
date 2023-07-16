const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`
 
const buildPrettierCommand = () => `prettier "**/*.{ts,tsx}" --write`

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand, buildPrettierCommand],
}
