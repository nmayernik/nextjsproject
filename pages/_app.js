import "../css/index.css";
import Head from "next/head";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Nick Mayernik</title>
        <meta
          name="Description"
          content="Full-stack UX Professional"
        />

        <meta name="theme-color" content="#101010" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F5F5F5" media="(prefers-color-scheme: light)" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
