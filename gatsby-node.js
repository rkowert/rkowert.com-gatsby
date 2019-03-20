/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(
    './src/components/BlogPost/BlogPost.tsx'
  );

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: node.fields.slug,
          },
        });
      });
      return resolve();
    });
  });
};

// Replacing '/' would result in empty string which is invalid
const removeTrailingSlash = str => (str === '/' ? str : str.replace(/\/$/, ''));

// Implement the Gatsby API “onCreatePage”. This is called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const newPage = { ...page };
  // console.log(`Component path: ${page.componentPath}`);

  // Ignore index.tsx files
  if (/index\.tsx$/.test(page.componentPath)) {
    // console.log('Ingoring index file');
    deletePage(page);
    return;
  }

  // "Move" '/Home' to '/'
  if (page.path === '/Home/Home/') {
    deletePage(page);
    // Create a new page but with '/' as path
    createPage({
      ...page,
      path: '/',
    });
    return;
  }

  const matches = page.path.match(/\/(?:([^/]+)\/)?([^/]+)\/$/);
  if (matches && matches[1] && matches[2] && matches[1] === matches[2]) {
    // Replace "/Page/Page/" with "/page"
    newPage.path = `/${matches[1].toLowerCase()}`;
  } else {
    // Remove trailing slash unless page is "/"
    newPage.path = removeTrailingSlash(page.path.toLowerCase());
  }

  if (newPage.path !== page.path) {
    // Replace new page with old page
    deletePage(page);
    createPage(newPage);
  }
};
