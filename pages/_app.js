import "../css/style.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Pokedex</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;