[material icon](https://material.io/resources/icons/?style=baseline)

[youtube icon](https://www.youtube.com/about/brand-resources/#logos-icons-colors)

for sass, install `sass`

```sh
npm start
```

# TypeScript

[Integrate](https://create-react-app.dev/docs/adding-typescript/) TypeScript with create-react-app

`npm install --save @types/classnames`

`npm install --save @types/resize-observer-browser`

# tailwindcss

[Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)

## Why

As the UI goes on, I might hardly maintain the consistency of same sorts
of components while having the ability to do some **tiny adjustments**.
For example, the `Menu` on the left of app and the dropdown menu of
`CreateBtn` on the right of `Topbar`, they should share the same design.
But the arrangement(spacing) of `MenuLink` of `CreateBtn` is not the same
as `MenuLink` of `Menu` according to YouTube (maybe it's not looked great).

I came up with three solutions:

- Create a modifier BEM class for `MenuLink` of `CreateBtn`
  - If the modifier is on E, multiple elements modifier is needed
    (`padding` of `.menu-item` and `margin-right` of `.menu__img`). Also,
    templating will be more complicate.
  - If the modifier is on B, `menu`, there might be more and more modifier
    for each **tiny adjustments**. It will be overwhelming.
  - Naming is HARD.
- Use utility classes like `mr-2`, `px-1` to do the **tiny adjustments**.
  - We can name a few utility classes for now. But in the future, it will
    be another job the maintain these utility classes.
- tailwindcss mitigate aforementioned drawbacks.

With `@apply`, I can have a consistent css component which made up in
a defined way (ruleset by tailwindcss). When it comes to **adjustments**,
I can **override** the spacing by utility classes with ease. To have the
**override** happen, the css component should be `@layer`-ed befor
`@tailwind utilities;`

# Coding Style

## SCSS

[stylelint](https://stylelint.io/)

### Why not `&__elem` for BEM with scss

NOTICE: It separates the scope of SCSS variables. That is,
sacrifice the ability to share the same variables between
a block and its elements.

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
