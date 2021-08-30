import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Nick Mayernik</title>
        <meta
          name="Description"
          content="Full-stack UX Professional"
        />

        <meta name="theme-color" content="#EBECED" media="(prefers-color-scheme: dark)" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
