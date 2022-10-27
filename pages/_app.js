import '../styles/globals.css';
import { Provider, createClient } from 'urql';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { StateContext } from '../lib/context';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Toaster } from 'react-hot-toast';
import FooterMain from '../components/Footer';

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Toaster />
          <Header />
          <Nav />
          <Component {...pageProps} />

          <FooterMain />
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
