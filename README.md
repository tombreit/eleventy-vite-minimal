# eleventy-vite-minimal

*Demo for https://github.com/11ty/eleventy-plugin-vite/issues/26*

*The PDF file in `downloads/` does not end up in `_site/downloads` for production builds.*

## Actual result

```bash
npx eleventy
```

* ✅ `index.html` should have `color: red` and console should print `Hi`
* ❌ `myfile.pdf` in `_site/downloads/` and referenced in `_site/index.html`

## Expected result

```bash
npx eleventy --serve
```

* ✅ `index.html` should have `color: red` and console should print `Hi`
* ✅ `myfile.pdf` in `_site/downloads/` and referenced in `_site/index.html`
