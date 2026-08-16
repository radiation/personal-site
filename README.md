# Bryan Choate personal site

A dependency-free, single-page personal site. It uses semantic HTML, modern CSS, and a small progressive-enhancement script, so it can be served by any static host.

## Structure

- `index.html`: hero, featured work, and footer
- `css/styles.css`: theme tokens and responsive single-page layout
- `js/main.js`: manual theme preference only
- `images/`: portrait assets and the favicon
- `blog/`: linked static writing pages

## Run locally

From the repository root:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## First replacements

1. Replace all `https://example.com/`, `https://github.com/`, and `https://www.linkedin.com/` placeholders in `index.html` with real URLs. They are marked with `TODO` comments.
2. Add `images/Bryan-Choate-12.jpg`, then change the hero image source from `profile-placeholder.svg` to that preferred portrait. The layout already provides intentional responsive cropping.
3. Optionally add `Bryan-Choate-10.jpg` and `Bryan-Choate-5.jpg` for future use; this compact page intentionally uses only the primary portrait.
4. Replace the OpenGraph URL and image fields in `index.html` when the production domain is known.

## Add a project

Copy an `article.project-card` from `index.html` within the `project-grid`, then change its label, heading, description, and links. For a featured project, use the `project-featured` pattern directly above it.

## Add a post

Copy `blog/example-post.html`, rename it with a URL-friendly filename, update its metadata and article content, then add an entry to `blog/index.html` and the homepage writing section.

## Deploy

The site needs no build command. Upload the directory to a static host or serve it through nginx, Cloud Run, a basic HTTP server, or a CDN. For a container deployment, use any small web-server image and copy this directory into its document root.
