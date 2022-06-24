import 'antd/dist/antd.css';
import '../styles/globals.scss';
import 'normalize.css';
import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, wrapper } from '../store/store';

function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <ConfigProvider direction="rtl">
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  </>
}

export default wrapper.withRedux(MyApp);
