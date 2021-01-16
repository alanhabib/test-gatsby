import React from 'react';
import { css } from '@emotion/react';
import Readlink from './read-link';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        display: flex;
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
        `}
      >
        <Image
          fluid={post.image.sharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
          `}
          alt={post.title}
        />
      </Link>
      <div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Readlink to={post.slug}>Read this post &rarr;</Readlink>
      </div>
    </article>
  );
};

export default PostPreview;
