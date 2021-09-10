import Head from "next/head";
import styles from "../styles/Layout.module.css";

function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Layout;

Layout.defaultProps = {
  title: "DJ Events | Find The Hottest Parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};