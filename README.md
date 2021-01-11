# Vivliostyle Theme Dnd5e Phb

[![npm: version](https://flat.badgen.net/npm/v/vivliostyle-theme-dnd-5e-phb)](https://npmjs.com/package/vivliostyle-theme-dnd-5e-phb)
[![npm: total downloads](https://flat.badgen.net/npm/dt/vivliostyle-theme-dnd-5e-phb)](https://npmjs.com/package/vivliostyle-theme-dnd-5e-phb)
![npm: license](https://flat.badgen.net/npm/license/vivliostyle-theme-dnd-5e-phb)

D&D 5e PHB theme for Vivliostyle

## Install

```bash
npm install --save vivliostyle-theme-dnd-5e-phb
# or
yarn add vivliostyle-theme-dnd-5e-phb
```

## Use

In `vivliostyle.config.js`:

```js
module.exports = {
  theme: 'vivliostyle-theme-dnd-5e-phb',
};
```

## Dev
Edit `phbStyle/*`, then run `npm phb` or `yarn phb`.

Run `vivliostyle-theme-scripts preview` to preview your `theme.css`.

```bash
vivliostyle-theme-scripts preview theme.css
```

You can specify layout file with `--layout` flag:

```bash
vivliostyle-theme-scripts preview theme.css --layout example/default.md
```

Run `vivliostyle-theme-scripts validate` before publishing your package.

```bash
vivliostyle-theme-scripts validate
```
