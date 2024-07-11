import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';
import '../styles/comic.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@/src/components/fontAwesome';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Philip Idiare Oghenerukevwe - Personal Website</title>
        <meta
          name="description"
          content="Personal website of Philip Idiare Oghenerukevwe, a student at Innopolis University, Russia."
        />
        <meta name="author" content="Philip Idiare Oghenerukevwe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
