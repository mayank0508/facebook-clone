import { Provider } from 'next-auth/client';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      {' '}
      {/* what it actually does is that
       it allows the state of the web app to be logined at all times */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
