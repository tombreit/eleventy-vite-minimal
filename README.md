# eleventy-vite-minimal

## Notes

* Current (2023-01-20) combination of `@11ty/eleventy": "^2.0.0-beta.1` and `@11ty/eleventy-plugin-vite": "^2.0.0-canary.2` will throw a warning:

  > [11ty] Warning: Eleventy Plugin (@11ty/eleventy-plugin-vite) Compatibility: This project requires the Eleventy version to match '>=2.0.0-canary.4' but found 2.0.0-beta.1. Use `npm update @11ty/eleventy -g` to upgrade the eleventy global or `npm update @11ty/eleventy --save` to upgrade your local project version.


## Run

```bash
npm install
npx eleventy --serve
```

## Result

```bash
/index.md        -> _site/index.html
/assets/app.js   -> _site/assets/app.js
/assets/app.scss -> _site/assets/app.css
```

`index.html` should have `color: red` and console should print `Hi`
