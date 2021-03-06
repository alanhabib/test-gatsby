import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import Layout from '../components/layouts';
import Readlink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Readlink to="/">&larr; Back to all posts</Readlink>
  </Layout>
);

export default PostTemplate;
