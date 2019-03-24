const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// const { getBlogIndexPagePath } = require('./src/utils/helpers');
function getBlogIndexPagePath(pageNumber) {
  return `/blog${pageNumber === 1 ? '' : `/page/${pageNumber}`}`;
}

function isBlogPostSource(sourceInstanceName) {
  return sourceInstanceName === 'blog-posts';
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);

  if (node.internal.type === 'MarkdownRemark') {
    // Create slugs
    const slug = createFilePath({
      node,
      getNode,
      basePath: isBlogPostSource(fileNode.sourceInstanceName)
        ? 'content/blog/'
        : 'pages/',
      trailingSlash: false,
    });
    createNodeField({
      node,
      name: 'slug',
      value: `${
        isBlogPostSource(fileNode.sourceInstanceName) ? '/blog' : ''
      }${slug}`,
    });

    // Allow allMarkdownRemark query to filter on sourceInstanceName values
    createNodeField({
      node,
      name: 'collection',
      value: fileNode.sourceInstanceName,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogIndexTemplate = path.resolve(
    './src/components/BlogIndex/BlogIndex.tsx'
  );
  const blogPostTemplate = path.resolve(
    './src/components/BlogPost/BlogPost.tsx'
  );

  // Get all blog posts via GQL
  const blogPostsQueryResults = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { collection: { eq: "blog-posts" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  // Paginate the blog index
  const blogPosts = blogPostsQueryResults.data.allMarkdownRemark.edges;
  const postsPerPage = 10;
  const numPages = Math.ceil(blogPosts.length / postsPerPage);
  for (let i = 0; i < numPages; i++) {
    createPage({
      path: getBlogIndexPagePath(i + 1),
      component: blogIndexTemplate,
      context: {
        currentPage: i + 1,
        limit: postsPerPage,
        numPages,
        skip: i * postsPerPage,
      },
    });
  }

  // Create individual blog post pages
  blogPosts.forEach(({ node }, i) => {
    const next = i === 0 ? null : blogPosts[i - 1].node;
    const prev = i === blogPosts.length - 1 ? null : blogPosts[i + 1].node;

    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        next,
        prev,
        // The slug must be included here so that it can be used in blogPostTemplate's PageQuery filter
        slug: node.fields.slug,
      },
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
    // Replace "/Page/Page/" with "/page", i.e., accomodate our opinionated file layout
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
