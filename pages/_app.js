import "../css/style.css";
import Head from "next/head";
import Router from 'next/router';
import Layout from "@components/layout";
import { ThemeProvider } from 'next-themes'
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Head>
          <title>Pokédex</title>
          <meta
            name="Description"
            content="Simple Pokédex with Nextjs and Tailwindcss"
          />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
