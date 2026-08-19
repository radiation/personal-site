# AGENTS.md

## Project

This repository is Bryan Choate's personal website.

It is a small static site built with:

- HTML
- CSS
- minimal vanilla JavaScript

There is no framework, package manager, or build step.

## How to work in this repository

When asked to modify the website:

1. Inspect the existing files before making changes.
2. Edit the existing implementation in place.
3. Do not recreate the site from scratch unless explicitly asked.
4. Preserve the existing visual language and layout unless the prompt specifically requests a redesign.
5. Keep dependencies at zero unless explicitly requested.
6. Prefer small, targeted changes over broad rewrites.

The primary page is the existing `index.html`.

Styles are in the existing CSS files under `css/`.

Images are under `images/`.

## Design intent

This is a recruiter-facing single-page splash site for a senior engineering leader.

The page should remain:

- polished
- understated
- compact
- recruiter-friendly
- readable within roughly one desktop viewport
- responsive on mobile

The primary information hierarchy is:

1. Bryan Choate
2. Platform engineering / developer experience / AI positioning
3. Enterprise-scale credibility
4. Selected projects
5. A small personal/team-building detail
6. GitHub / LinkedIn

Avoid turning this into:

- a long scrolling portfolio
- an HTML résumé
- a generic developer portfolio
- a SaaS marketing page

## Important content constraints

Do not invent:

- accomplishments
- metrics
- technologies
- project capabilities
- URLs
- employment history

If something is unknown, preserve the existing value or use a TODO.

## Current project cards

The project cards should remain structurally consistent:

- category
- project name
- short description
- technology row
- Demo and GitHub links aligned at the bottom

Current projects:

- Coyote CI
- AI Job Finder
- Agendable
- Odds Arbitrage

## Agent behavior

If a prompt refers to "the current page," "existing layout," or similar language:

- inspect the repository first
- infer the relevant file from the existing project structure
- make the requested edit directly
- do not respond by generating a hypothetical replacement page

If the requested change is small, keep the patch small.