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
        link: 'cv',
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
        link: '/contact',
      },
    ],
    siteUrl: 'https://rkowert.com',
    social: {
      gscholar: 'DKS1kSQAAAAJ',
      instagram: 'drrachelkowert',
      linkedin: 'rachelkowert',
      researchGate: 'Rachel_Kowert',
      twitter: 'linacaruso',
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
        ignore: ['./awards/*', './blog', './books/*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/images/logos/logo-1500.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
