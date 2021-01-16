import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>this is my personal website</p>
    <Link to={'/'}>&larr; Back to Home</Link>
  </Layout>
);
