# Pupwell website

Buildless HTML, CSS and JavaScript. Self-hosted fonts and first-party art. No forms, analytics, cookies, database connections or app credentials.

Serve `dist/` as the web root. For local preview: `python -m http.server 8797 --directory dist`.

## Pages

- `/`: marketing landing page, local illustrative goal interaction
- `/support/`: pre-launch help
- `/privacy/`: website privacy and pre-release app data information
- `/terms/`: pre-release website terms
- `/404.html`: branded fallback

## Release handoff

The domain `pupwell.app` is not registered or connected by this project. No App Store URL, business contact or operator identity has been invented. Final app policies require the real contact/operator, server retention/deletion information and release review. See `policy-draft.md` for internal verified facts and remaining policy decisions. Add the genuine App Store URL once released. Keep all core/free vs Plus descriptions truthful.

Use the `.openai/hosting.json` Site identity for future deployment. Assets are portable to GitHub Pages, Cloudflare Pages or another static host. The source does not depend on Supabase.
