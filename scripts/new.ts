import * as child_process from 'child_process';
import * as fs from 'fs';
import * as inquirer from 'inquirer';
import * as moment from 'moment';

enum Resource {
  Blog = 'blog',
  Book = 'book',
}

const questions = [
  {
    type: 'list',
    name: 'resource',
    message: 'Please select a resource:',
    default: Resource.Blog,
    choices: Object.values(Resource),
    // when: () => process.argv.length < 3 || !RESOURCES.includes(process.argv[2]),
  },
  {
    type: 'input',
    name: 'title',
    message: 'Title:',
  },
  {
    // TODO Populate list with existing categories?
    type: 'input',
    name: 'category',
    message: 'Category:',
    when: ({ resource }) => resource === Resource.Blog,
  },
  {
    type: 'input',
    name: 'tags',
    message: 'Tags:',
    when: ({ resource }) => resource === Resource.Blog,
  },
  {
    type: 'input',
    name: 'date',
    message: 'Published date:',
    when: ({ resource }) => resource === Resource.Book,
    validate: input => !Number.isNaN(Date.parse(input)),
  },
];

interface Answers {
  resource: string;
  title: string;
  date?: string;
}

inquirer.prompt(questions).then((answers: Answers) => {
  if (answers.resource === Resource.Blog) {
    createBlogPost(answers);
  } else if (answers.resource === Resource.Book) {
    createBook(answers);
  }
});

const toKebabCase = (str: string) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

const createBlogPost = post => {
  const slug = toKebabCase(post.title);
  const path = `./content/blog/${slug}/index.md`;
  const now = Date.now();
  const frontmatter = `---
title: "${post.title}"
date: ${moment().format('YYYY-MM-DD HH:mm:ss')}
category: ${post.category}
tags: ${
    post.tags
      ? `\n  - ${post.tags
          .split(',')
          .map(tag => tag.trim())
          .join('\n  - ')}`
      : ''
  }
---

`;

  fs.mkdirSync(`./content/blog/${slug}`, { recursive: true });
  fs.writeFile(path, frontmatter, err => {
    if (err) throw err;
    console.log(`The file has been created: ${path}`);
    child_process.spawn(process.env.EDITOR, [path], {
      detached: true,
      stdio: 'inherit',
    });
  });
};

const createBook = book => {
  const slug = toKebabCase(book.title);
  const path = `./content/books/${slug}.md`;

  const frontmatter = `---
title: ${book.title}
subtitle:
cover: ${slug}.jpg
isbn10:
isbn13:
date: ${book.date}
productId:
  amazon:
  indiebound:
reviews:
  - author:
    text:
---

`;

  fs.writeFile(`${path}`, frontmatter, err => {
    if (err) throw err;
    console.log(`The file has been created: ${path}`);
    child_process.spawn(process.env.EDITOR, [path], {
      detached: true,
      stdio: 'inherit',
    });
  });
};
