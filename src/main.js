// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Google / Facebook
  head.meta.push({
    property: 'og:type',
    content: 'website'
  })
  head.meta.push({
    property: 'og:url',
    content: 'https://www.coltborg.com/'
  })
  head.meta.push({
    property: 'og:title',
    content: 'Colt Borg'
  })
  head.meta.push({
    property: 'og:description',
    content: 'Web developer, with a love for cats.'
  })
  head.meta.push({
    property: 'og:image',
    content: 'https://www.coltborg.com/social.png'
  })

  // Twitter
  head.meta.push({
    property: 'twitter:card',
    content: 'summary_large_image'
  })
  head.meta.push({
    property: 'twitter:url',
    content: 'https://www.coltborg.com/'
  })
  head.meta.push({
    property: 'twitter:description',
    content: 'Web developer, with a love for cats.'
  })
  head.meta.push({
    property: 'twitter:image',
    content: 'https://www.coltborg.com/social.png'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}