import 'antd/dist/antd.css';
import "antd-mobile/bundle/style.css";
import '../styles/globals.scss';
import 'normalize.css';
import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, wrapper } from '../store/store';
import ReactGA from 'react-ga';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module


//Binding events. 
NProgress.configure({
  showSpinner: false,
})
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize('G-7GN93PD1BK');
    ReactGA.pageview(window.location.pathname + window.location.search);
    const tagManagerArgs = {
      gtmId: "GTM-TQM643Q",
    };

    //TagManager.initialize(tagManagerArgs);
  }, []);

  return <>

    <Provider store={store}>
      <ConfigProvider direction="rtl">
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  </>
}

export default wrapper.withRedux(MyApp);
