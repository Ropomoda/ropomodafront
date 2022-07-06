import 'antd/dist/antd.css';
import '../styles/globals.scss';
import 'normalize.css';
import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, wrapper } from '../store/store';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
  }, []);

  return <>
    <Head>
      {/* Seo Meta Tags */}
      <meta name="title" content="فروشگاه اینترنتی روپومدا" />
      <meta name="description" content="توضیحات" />
      <meta name="keywords" content="لباس،تیشرت،مانتو" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="revisit-after" content="7 days" />

      {/* Theme Meta Tags */}
      <meta name="theme-color" content="#F9AFEC" />
      <meta name="msapplication-navbutton-color" content="#F9AFEC" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#F9AFEC" />

      {/* OG meta tags */}

      <meta property="og:title" content="فروشگاه اینترنتی روپومدا" />
      <meta property="og:site_name" content="Ropo Moda" />
      <meta property="og:url" content="ropomoda.com" />
      <meta property="og:description" content="فروشگاه اینترنتی روپومدا" />
      <meta property="og:type" content="business.business" />
      <meta property="og:image" content="https://ropomoda-public-staticfiles.s3.ir-thr-at1.arvanstorage.com/public/logo-fill.png" />
    </Head>
    <Provider store={store}>
      <ConfigProvider direction="rtl">
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  </>
}

export default wrapper.withRedux(MyApp);
