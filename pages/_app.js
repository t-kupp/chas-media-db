import Header from '@/components/Header';
import WatchlistProvider from '@/context/WatchlistContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <WatchlistProvider>
      <Header />
      <Component {...pageProps} />
    </WatchlistProvider>

  );
}
