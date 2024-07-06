import React from 'react';
import { AppProps } from 'next/app';
import '../styles/styles.css';
import '../styles/comic.css';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
