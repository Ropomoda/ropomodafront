import 'antd/dist/antd.css';
import '../styles/globals.scss';
import 'normalize.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { ConfigProvider } from 'antd';
import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Scrollbar.initAll();
  }, []);
  return <>
    <ConfigProvider direction="rtl">
      <Component {...pageProps} />
    </ConfigProvider>
  </>
}

export default MyApp
