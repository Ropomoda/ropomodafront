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
      <meta name="theme-color" content="#F9AFEC" />
      <meta name="msapplication-navbutton-color" content="#F9AFEC" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#F9AFEC" />
    </Head>
    <Provider store={store}>
      <ConfigProvider direction="rtl">
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  </>
}

export default wrapper.withRedux(MyApp);
