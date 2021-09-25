module.exports = {
  siteMetadata: {
    author: 'Dr. Rachel Kowert',
    description:
      'The web site of Dr. Rachel Kowert containing information on her research, publications, and current projects',
    keywords: 'rachel kowert, psychology, research, gaming, psychgeist',
    navLinks: [
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'Psychgeist',
        link: 'https://youtube.com/Psychgeist',
        target: '_blank',
      },
      {
        name: 'CV',
        link: '/cv',
      },
      {
        name: 'books',
        link: '/books',
      },
      {
        name: 'Pragmatic Princess',
        link: 'https://buildyourowncastle.com/',
        target: '_blank',
      },
      {
        name: 'resources',
        link: '/resources',
      },
      // {
      //   name: 'blog',
      //   link: '/blog',
      // },
      {
        name: 'press',
        link: '/press',
      },
      {
        name: 'contact',
        link: 'mailto:rkowert@gmail.com',
        target: '_blank',
      },
    ],
    siteUrl: 'https://rkowert.com',
    social: {
      gscholar: 'DKS1kSQAAAAJ',
      facebook: 'drrachelkowert',
      instagram: 'drrachelkowert',
      linkedin: 'rachelkowert',
      researchGate: 'Rachel_Kowert',
      twitch: 'TakeThisOrg',
      twitter: 'drkowert',
      youtube: 'Psychgeist',
    },
    title: 'Dr. Rachel Kowert',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgoConfig: {
          plugins: {
            prefixIds: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          components: 'src/components',
          images: 'src/images',
          utils: 'src/utils',
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'awards',
        path: `${__dirname}/content/awards`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-posts',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'books',
        path: `${__dirname}/content/books`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'site-content',
        path: `${__dirname}/content`,
        ignore: ['./awards/*', './blog/*', './books/*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
        ignore: [],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-categories',
    //   options: {
    //     templatePath: `${__dirname}/src/templates/category.js`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-tags',
      options: {
        prefix: 'blog/tag/',
        templatePath: `${__dirname}/src/components/Blog/TagPage/TagPage.tsx`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        // extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          // 'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          // 'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
        ],
      },
    },
    // {
    //   resolve: 'gatsby-transformer-remark-frontmatter',
    //   // default: { blacklist: [] }
    //   options: {
    //     // frontmatter fields to exclude, including all others
    //     blacklist: ['templateKey']
    //     // frontmatter fields to include, excluding all others
    //     // whitelist: ['markdownField']
    //   }
    // },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dr. Rachel Kowert',
        short_name: 'Dr. Kowert',
        start_url: '/',
        background_color: '#a353c4',
        theme_color: '#a353c4',
        display: 'browser',
        icon: 'src/images/logos/logo-1500.png', // This path is relative to the root of the site.
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-39570170-1',
        respectDNT: true,
      },
    },
    // This (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
  ],
};
