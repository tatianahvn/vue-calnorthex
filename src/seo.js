export const SITE_URL = 'https://calnorthex.com'
export const SITE_NAME = 'Calnorthex Concrete'
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`

/**
 * Builds the vue-meta `metaInfo` for a route.
 *
 * Every tag carries a `vmid` so vue-meta replaces it instead of appending a
 * second copy when navigating between routes.
 *
 * @param {Object}  page
 * @param {string}  page.title        Page title, without the site name suffix.
 * @param {string}  page.description  Meta description, ~150-160 characters.
 * @param {string}  page.path         Route path, used for the canonical URL.
 * @param {boolean} [page.noindex]    Keep the page out of search results.
 */
export function pageMeta ({ title, description, path, noindex = false }) {
  const url = `${SITE_URL}${path}`
  const fullTitle = `${title} | ${SITE_NAME}`

  const meta = [
    { vmid: 'description', name: 'description', content: description },
    { vmid: 'og:type', property: 'og:type', content: 'website' },
    { vmid: 'og:site_name', property: 'og:site_name', content: SITE_NAME },
    { vmid: 'og:title', property: 'og:title', content: fullTitle },
    { vmid: 'og:description', property: 'og:description', content: description },
    { vmid: 'og:url', property: 'og:url', content: url },
    { vmid: 'og:image', property: 'og:image', content: OG_IMAGE },
    { vmid: 'og:locale', property: 'og:locale', content: 'en_US' },
    { vmid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { vmid: 'twitter:title', name: 'twitter:title', content: fullTitle },
    { vmid: 'twitter:description', name: 'twitter:description', content: description },
    { vmid: 'twitter:image', name: 'twitter:image', content: OG_IMAGE }
  ]

  if (noindex) {
    meta.push({ vmid: 'robots', name: 'robots', content: 'noindex, follow' })
  }

  return {
    title: fullTitle,
    meta,
    link: [
      { vmid: 'canonical', rel: 'canonical', href: url }
    ]
  }
}
