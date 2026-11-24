# Pupwell website

Static HTML, CSS and JavaScript. Production domain: https://trypupwell.app

Netlify project: pupwell. GitHub source: https://github.com/nevarbe/pupwell-site (main).
Publish directory: dist. No build command is required.

The homepage uses home.css/home.js and the information pages use styles.css/site.js.
Run `node serve.mjs` to preview locally on port 8798. Regenerate Support, Privacy and Terms with `python build-pages.py`; this does not overwrite the homepage.

Public contact: hello@trypupwell.app. The homepage, information pages, canonical URLs and sitemap use the production identity. _redirects forwards the netlify.app and www aliases to the primary domain, preserving paths.

The homepage links directly to Pupwell on the App Store at https://apps.apple.com/app/id6831336724. The launch signup form is closed. Previous submissions are available in the Netlify Forms dashboard under `pupwell-waitlist`. The launch announcement is sent separately. Handle deletion requests sent to hello@trypupwell.app and remove the list when no longer needed.

All fonts and media are served locally. Motion respects reduced-motion settings. ASSETS.md records asset sources and licenses.
