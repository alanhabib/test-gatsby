import React from 'react';
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet';
import Header from './header';

import useSiteMetaData from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetaData();
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            color: #555;
            font-size: 18px;
            line-height: 1.4;
          }

          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5 {
            color: #222;
            line-height: 1.1;
          }

          + * {
            margin-top: 0.5rem;
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en"></html>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
