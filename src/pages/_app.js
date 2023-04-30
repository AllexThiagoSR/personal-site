import Header from '@/components/Header';
import '../styles/globals.css';
import Aside from '@/components/Aside';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="layout-default">
        <Aside />
        <Component {...pageProps} />
      </div>
    </>
  );
}
