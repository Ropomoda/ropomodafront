import 'antd/dist/antd.css';
import '../styles/globals.scss';
import 'normalize.css';

import { ConfigProvider } from 'antd';

function MyApp({ Component, pageProps }) {
  return <>
    <ConfigProvider direction="rtl">
      <Component {...pageProps} />
    </ConfigProvider>
  </>
}

export default MyApp
