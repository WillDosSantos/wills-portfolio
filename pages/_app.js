import '@/styles/globals.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration : 500
    });
  }, []);

  return <Component {...pageProps} />
}
