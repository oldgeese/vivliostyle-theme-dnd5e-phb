const less = require('less');
const fs = require('fs');
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const url = require("postcss-url")
const cssnano = require('cssnano')
const discardUnused = require('postcss-discard-unused')
const assets = require('postcss-assets')

; // just a delimiter

(async () => {
  const lessOutput = await less
    .render(fs.readFileSync('./phbStyle/phb.style.less', 'utf8'), { compress: false })
    .catch((err) => console.log(err))

  const postcssOutput = await postcss([
    // autoprefixer,
    // url(),
    // url({filter: /\.otf/, url: 'inline', encodeType: 'base64', maxSize: 1024 * 1024 * 1024}),
    // url({url: 'inline', basePath: './phbStyle'}),
    // discardUnused,
    // cssnano({preset: 'default'}),
    // assets({basePath: './phbStyle'}),
  ]).process(lessOutput.css, {from: './theme.css', to: './theme.css', map: {inline: false}})
    .catch((err) => console.log(err))

  fs.writeFile('./theme.css', postcssOutput.css, () => true)
  if ( postcssOutput.map ) {
    fs.writeFile('./theme.css.map', postcssOutput.map.toString(), () => true)
  }
})();
