# Pupwell website

Static HTML, CSS and JavaScript. Production domain: https://trypupwell.app

Netlify project: pupwell. GitHub source: https://github.com/nevarbe/pupwell-site (main).
Publish directory: dist. No build command is required.

The launch-list homepage uses waitlist.css/waitlist.js and the information pages use styles.css/site.js.
Run `node serve.mjs` to preview locally on port 8798. Regenerate Support, Privacy and Terms with `python build-pages.py`; this does not overwrite the homepage.

Public contact: hello@trypupwell.app. The homepage, information pages, canonical URLs and sitemap use the production identity. _redirects forwards the netlify.app and www aliases to the primary domain, preserving paths.

Set appStoreUrl in dist/config.js to the genuine App Store listing when publicly released. Until then download buttons show an honest coming-soon dialog.

The homepage collects a name and email for launch notifications through Netlify Forms. Form detection must be enabled in Netlify before deploying. Submissions are available at https://app.netlify.com/projects/pupwell/forms under `pupwell-waitlist`, with a CSV export. No mailing provider, autoresponder or launch-email automation is configured; sending the promised launch announcement is a separate action. Handle deletion requests sent to hello@trypupwell.app and remove the list when no longer needed.

The static form also works without JavaScript and redirects to /thanks/. JavaScript shows an inline confirmation only after a successful POST, preserves input on errors and blocks duplicate in-flight submissions. The hidden bot-field is a honeypot. No analytics, app credentials or app database connections are included.

All fonts and media are served locally. Motion respects reduced-motion settings. ASSETS.md records asset sources and licenses.
