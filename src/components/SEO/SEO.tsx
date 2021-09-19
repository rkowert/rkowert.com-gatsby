import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface MetaDatum {
  content: string;
  name: string;
}

interface Props {
  description?: string;
  image?: string;
  lang?: string;
  meta?: MetaDatum[];
  keywords?: string[];
  slug?: string;
  title: string;
}

export default function SEO({
  description,
  image,
  lang = 'en',
  meta = [],
  keywords = [],
  // slug = '',
  title,
}: Props) {
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            author
            description
            siteUrl
            title
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image ? `${site.siteMetadata.siteUrl}${image}` : null;
  // const url = `${site.siteMetadata.siteUrl}${slug}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        // {
        //   property: 'og:url',
        //   content: url,
        // },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(
          metaImage
            ? [
                { property: 'og:image', content: metaImage },
                { name: 'twitter:image', content: metaImage },
              ]
            : []
        )
        .concat(meta)}
    />
  );
}
