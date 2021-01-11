const less = require('less');
const fs = require('fs');
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const discardUnused = require('postcss-discard-unused')

; // just a delimiter

(async () => {
  const lessOutput = await less
    .render(fs.readFileSync('./phbStyle/phb.style.less', 'utf8'), { compress: false })
    .catch((err) => console.log(err))

  const postcssOutput = await postcss([
    autoprefixer,
    discardUnused,
  ]).process(lessOutput.css, {from: './theme.css', to: './theme.css', map: {inline: false}})
    .catch((err) => console.log(err))

  fs.writeFile('./theme.css', postcssOutput.css, () => true)
  if ( postcssOutput.map ) {
    fs.writeFile('./theme.css.map', postcssOutput.map.toString(), () => true)
  }
})();
