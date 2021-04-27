import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { apolloDataService } from '../services';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloDataService}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
