const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

function findFileNode({ node, getNode }) {
  // Find the file node.
  let fileNode = node;
  let whileCount = 0;

  while (
    fileNode.internal.type !== 'File' &&
    fileNode.parent &&
    getNode(fileNode.parent) !== undefined &&
    whileCount < 101
  ) {
    fileNode = getNode(fileNode.parent);
    whileCount += 1;

    if (whileCount > 100) {
      console.log(
        "It looks like you have a node that's set its parent as itself",
        fileNode
      );
    }
  }

  return fileNode;
}

function getBlogIndexPagePath(pageNumber) {
  return `/blog${pageNumber === 1 ? '' : `/page/${pageNumber}`}`;
}

function isBlogPostNode({ node, getNode }) {
  const fileNode = findFileNode({
    node,
    getNode,
  });
  if (!fileNode) return false;
  return fileNode.sourceInstanceName === 'blog-posts';
}

function isBookNode({ node, getNode }) {
  const fileNode = findFileNode({
    node,
    getNode,
  });
  if (!fileNode) return false;
  return fileNode.sourceInstanceName === 'books';
}

function getBasePath({ node, getNode }) {
  if (isBlogPostNode({ node, getNode })) {
    return 'content/blog/';
  }
  if (isBookNode({ node, getNode })) {
    return 'content/books/';
  }

  return 'src/pages/';
}

function getSlugFromNode({ node, getNode }) {
  const relativeFilePath = createFilePath({
    node,
    getNode,
    basePath: getBasePath({ node, getNode }),
    trailingSlash: false,
  });

  return relativeFilePath.slice(1);
}

function getUrlPathFromNode({ node, getNode }) {
  const relativeFilePath = createFilePath({
    node,
    getNode,
    basePath: getBasePath({ node, getNode }),
    trailingSlash: false,
  });

  if (isBlogPostNode({ node, getNode })) {
    return `/blog${relativeFilePath}`;
  }
  if (isBookNode({ node, getNode })) {
    return `/books#${relativeFilePath.slice(1)}`;
  }

  return relativeFilePath.slice(1);
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);

  if (fileNode) {
    // Enable queries to filter on sourceInstanceName values
    createNodeField({
      node,
      name: 'collection',
      value: fileNode.sourceInstanceName,
    });
  }

  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: getSlugFromNode({ node, getNode }),
    });
    createNodeField({
      node,
      name: 'path',
      value: getUrlPathFromNode({ node, getNode }),
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogIndexTemplate = path.resolve(
    './src/components/Blog/BlogIndexPage/BlogIndexPage.tsx'
  );
  const blogPostTemplate = path.resolve(
    './src/components/Blog/BlogPostPage/BlogPostPage.tsx'
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
              path
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
      path: node.fields.path,
      component: blogPostTemplate,
      context: {
        next,
        prev,
        // The path must be included here so that it can be used in blogPostTemplate's PageQuery filter
        // path: node.fields.path,
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
