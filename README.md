# Pupwell website

Static HTML, CSS and JavaScript. Production domain: https://trypupwell.app

Netlify project: pupwell. GitHub source: https://github.com/nevarbe/pupwell-site (main).
Publish directory: dist. No build command is required.

The homepage uses home.css/home.js and the information pages use styles.css/site.js.
Run `node serve.mjs` to preview locally on port 8798. Regenerate Support, Privacy and Terms with `python build-pages.py`; this does not overwrite the homepage.

Public contact: hello@trypupwell.app. The homepage, information pages, canonical URLs and sitemap use the production identity. _redirects forwards the netlify.app and www aliases to the primary domain, preserving paths.

Set appStoreUrl in dist/config.js to the genuine App Store listing when publicly released. Until then download buttons show an honest coming-soon dialog.

Support, privacy and terms are explicitly pre-release documents. Final operator details, retention and release disclosures still require completion before App Store submission. Do not invent them. No analytics, signup forms, app credentials or database connections are included in this static site.

All fonts and media are served locally. Motion respects reduced-motion settings. ASSETS.md records asset sources and licenses.
