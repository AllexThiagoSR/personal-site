import Header from '@/components/Header';
import '../styles/globals.css';
import '../styles/RootPage.css';
import Aside from '@/components/Aside';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="images/placeholderImage.jpg" type="image/jpeg" />
      </Head>
      <Header />
      <div className="layout-default">
        <Aside />
        <Component {...pageProps} />
      </div>
    </>
  );
}
