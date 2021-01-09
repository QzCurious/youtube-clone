[material icon](https://material.io/resources/icons/?style=baseline)

[youtube icon](https://www.youtube.com/about/brand-resources/#logos-icons-colors)

for sass, install `sass`

```sh
npm start
```

# Coding Style

## SCSS

[stylelint](https://stylelint.io/)

### Why not `&__elem` for BEM with scss

Why not, for example:

```scss
.block {
  &__elem {
  }
}
```

- It looks better, no indentation for elements
- A BEM structure is grouped by a file. I still can rename the block with ease.

### Why `display: inline-block` (or `display: inline`) explicitly

We may ~accidentally~ write `<div>` instead of `<span>`. To make it more manageable, this way **might** be better.
