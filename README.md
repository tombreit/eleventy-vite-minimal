# eleventy-vite-minimal

* Branch `vite-videojs`
* Integrates https://videojs.com/getting-started/

## Run

```bash
npm install
npx eleventy --serve
```

## Result

```bash
/src/index.md        -> _site/index.html
/assets/app.js   -> _site/assets/app.js
/assets/app.scss -> _site/assets/app.css
```

* `index.html` should have `color: red` and console should print `Hi`
* video.js player should display/play a video file
