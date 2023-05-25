import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  {
    /* 
    -Root component where pages will be rendered in 
    -Renders for every page that is displayed
    */
  }
  return (
    <Layout>
      <Head>
        {/* 
        This head is applied for all pages
        */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
