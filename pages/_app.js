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

        Head elements are merged and if there are conflicts, the second element is the one that stays

        We can give all pages a general title and data, if htere is a more specific one in a page the general data will
        be replaced with the specific data
        */}
        <title>Next Events</title>
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
