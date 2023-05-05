import Header from '@/components/Header';
import '../styles/globals.css';
import '../styles/RootPage.css';
import '../styles/ProjectsPage.css';
import Aside from '@/components/Aside';
import Head from 'next/head';
import logo from '../images/logo.png'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={ logo.src } type="image/png" />
      </Head>
      <Header />
      <div className="layout-default">
        <Aside />
        <Component {...pageProps} />
      </div>
    </>
  );
}
