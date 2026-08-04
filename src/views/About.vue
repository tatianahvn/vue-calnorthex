<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { pageMeta } from '@/seo'

// Placeholder page. Kept out of the search index until it has real content.
export default {
  name: 'About',
  metaInfo: pageMeta({
    title: 'About Us',
    description: 'About Calnorthex Concrete, a licensed concrete contractor based in Santa Rosa, California.',
    path: '/about',
    noindex: true
  })
}
</script>
