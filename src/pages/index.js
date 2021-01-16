import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero></Hero>
      <Layout>
        <h1>Home</h1>
        <p>Hello from Sweden</p>
        <Link to={'/about/'}>Learn more about me &rarr;</Link>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
