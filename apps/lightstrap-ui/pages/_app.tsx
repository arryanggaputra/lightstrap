import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to lightstrap-ui!</title>
      </Head>
      <header className="py-10 text-center">
        <h1 className="text-5xl font-bold">Lightstrap</h1>
      </header>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
