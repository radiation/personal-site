# Bryan Choate personal site

A dependency-free static personal and professional site. It uses semantic HTML, modern CSS, and a small progressive-enhancement script, so it can be served by any static host.

## Structure

- `index.html`: homepage and project/work sections
- `css/styles.css`: theme tokens, layout, responsive rules, and blog styles
- `js/main.js`: theme preference and mobile navigation only
- `images/`: temporary portrait, project, and favicon SVG placeholders
- `blog/`: static writing index and an example post to copy

## Run locally

From the repository root:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## First replacements

1. Replace all `https://example.com/`, `https://github.com/`, and `https://www.linkedin.com/` placeholders in the HTML files with real URLs. They are marked with `TODO` comments.
2. Replace `hello@example.com` with the desired public email address.
3. Add professional and casual images in `images/`, then update the two `<img>` elements in `index.html`. Keep explicit `width` and `height` attributes to prevent layout shift.
4. Update the placeholder dates and project descriptions as their public details are ready.
5. Replace the OpenGraph URL and image fields in `index.html` when the production domain is known.

## Add a project

Copy an `article.project-card` from `index.html` within the `project-grid`, then change its label, heading, description, and links. For a featured project, use the `project-featured` pattern directly above it.

## Add a post

Copy `blog/example-post.html`, rename it with a URL-friendly filename, update its metadata and article content, then add an entry to `blog/index.html` and the homepage writing section.

## Deploy

The site needs no build command. Upload the directory to a static host or serve it through nginx, Cloud Run, a basic HTTP server, or a CDN. For a container deployment, use any small web-server image and copy this directory into its document root.
