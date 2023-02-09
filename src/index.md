---
title: 11ty w vite minimal and video.js test
layout: layout.njk
templateEngineOverride: njk,md
---

# {{ title }}

<video id="my-player" class="video-js" controls preload="auto" poster="//vjs.zencdn.net/v/oceans.png" data-setup='{}'>
<source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
<source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
<source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
</video>
