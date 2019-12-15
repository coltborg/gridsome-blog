// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Colt Borg',
  siteDescription: 'Web developer, with a love for cats.',

  icon: './src/favicon.png',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: false, // TODO: Enable once close to release
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: false, // TODO: Enable once close to release
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedItemOptions: node => ({
          author: 'Colt Borg',
          categories: [node.tags],
          date: node.date,
          description: node.content,
          title: node.title,
          url: 'https://coltborg.com' + node.path,
        }),
        feedOptions: {
          feed_url: 'https://coltborg.com/rss.xml',
          site_url:  'https://coltborg.com',
          title: 'Colt Borg',
        },
        latest: true,
        output: {
          dir: './static',
          // The name of the feed.
          name: 'rss.xml'
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
