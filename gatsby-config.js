module.exports = {
  siteMetadata: {
    author: 'Dr. Rachel Kowert',
    description:
      'The web site of Dr. Rachel Kowert containing information on her research, publications, and current projects',
    keywords: 'rachel kowert, psychology, research, gaming',
    navLinks: [
      {
        name: 'blog',
        link: '/blog',
      },
      {
        name: 'about',
        link: '/about',
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
        name: 'resources',
        link: '/resources',
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
      twitter: 'drkowert',
      youtube: 'UC2wWdpJ8CQaulB44RLZ4gWw',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dr. Rachel Kowert',
        /* eslint-disable @typescript-eslint/camelcase */
        short_name: 'Dr. Kowert',
        start_url: '/',
        background_color: '#a353c4',
        theme_color: '#a353c4',
        /* eslint-enable @typescript-eslint/camelcase */
        display: 'minimal-ui',
        icon: 'src/images/logos/logo-1500.png', // This path is relative to the root of the site.
      },
    },
    // No longer needed. gatsby-plugin-manifest provides favicon support
    // {
    //   resolve: 'gatsby-plugin-favicon',
    //   options: {
    //     logo: './src/images/logos/logo-1500.png',
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
  ],
};
