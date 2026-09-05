# Calnorthex Concrete — Marketing Site

Production marketing site for [Calnorthex Concrete](https://calnorthex.com), a licensed concrete
contractor serving Santa Rosa and the surrounding Sonoma and Napa Counties. Built as a Vue 2 SPA
and deployed to Firebase Hosting through GitHub Actions.

The site's job is lead generation: a visitor searching for "concrete contractor Santa Rosa" should
land on a page that loads fast, proves the work with real project photos, and puts the phone number
one tap away. Most of the engineering decisions below follow from that.

## Live site

**https://calnorthex.com**

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Vue 2.6 (Options API) |
| UI toolkit | Vuetify 2.4 |
| Routing | Vue Router 3, HTML5 history mode |
| State | Vuex 3 |
| Metadata | vue-meta 2 |
| Carousels | Swiper 5 via vue-awesome-swiper |
| Styling | Sass (indented syntax), shared variables injected via style-resources-loader |
| Build | Vue CLI 4 / webpack |
| Hosting & CI | Firebase Hosting, GitHub Actions |

## Features

- **Single-page marketing flow.** The home view composes independent section components — slider,
  services, video, testimonials, project gallery — so sections can be reordered or A/B tested
  without touching each other.
- **Project gallery** with lazy-loaded images and a lightbox, backed by the client's real job
  photos rather than stock imagery.
- **SEO built for social scrapers.** See the note below — this was the most interesting problem in
  the project.
- **Responsive from 320px up**, using Vuetify's breakpoint system with Sass mixins for the
  component-level cases the grid doesn't cover.
- **Cross-view scroll targeting.** Nav links that point at a home-page section from another route
  set a flag in Vuex, redirect home, and scroll to the anchor once the view has mounted.

## SEO architecture

A client-rendered SPA has a specific failure mode: social scrapers (Facebook, WhatsApp, LinkedIn,
Slack) don't execute JavaScript, so any `<meta>` tag written by vue-meta at runtime is invisible to
them. A shared link previews as a blank card.

The fix here is a two-layer approach:

1. **Static tags in `public/index.html`**, describing the home page, each marked with a
   `data-static-seo` attribute. These ship in the served HTML, so scrapers always get a complete
   Open Graph and Twitter Card payload.
2. **`main.js` strips every `data-static-seo` tag on app start**, handing ownership to vue-meta so
   per-route metadata can take over without leaving duplicate tags in the head.

Route metadata itself is centralized in [`src/seo.js`](src/seo.js), which builds a full `metaInfo`
object — title, description, canonical URL, Open Graph, Twitter Card — from a small per-page
descriptor. Every tag carries a `vmid` so vue-meta replaces it on navigation instead of appending a
second copy.

The site also ships `robots.txt`, a `sitemap.xml`, and site-wide `LocalBusiness` structured data
(kept out of vue-meta deliberately: it describes the business, not the current route, so it stays
identical on every page).

## Local development

Requires Node 22.

```bash
npm install
npm run serve     # dev server with hot reload
npm run build     # production bundle to dist/
npm run lint      # ESLint + eslint-plugin-vue
```

> The `serve` and `build` scripts set `NODE_OPTIONS=--openssl-legacy-provider`. Vue CLI 4's webpack
> version relies on a hashing algorithm that Node 17+ removed from OpenSSL 3; this flag restores it
> without forcing a build-tooling migration on a site that is otherwise stable.

## Project structure

```
src/
├── assets/          Images, icons, gallery photos, Sass variables
├── components/      Section components (slider, services, gallery, testimonials, footer)
│   ├── Cards/       Gallery and testimonial cards
│   └── Header/      Header and mobile sidebar
├── router/          Route table + catch-all redirect
├── views/           Home, About, Contact
├── seo.js           Shared metaInfo builder
└── store.js         Vuex store (cross-view scroll state)
```

## Deployment

Firebase Hosting, driven by two GitHub Actions workflows:

- **`firebase-hosting-merge.yml`** — every push to `master` builds and deploys to the live channel.
- **`firebase-hosting-pull-request.yml`** — every PR builds and deploys to a temporary preview
  channel, so changes can be reviewed on a real URL before merging.

Hosting rewrites all unknown paths to `index.html` for history-mode routing; the router's `*` route
redirects those to home so a mistyped URL lands somewhere useful instead of rendering an empty page.

## Notes

Built for a real client and published here as a portfolio piece. Firebase project configuration and
deploy credentials live in repository secrets and are not part of this repository.
