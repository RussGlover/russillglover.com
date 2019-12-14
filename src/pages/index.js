import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Russill Glover</h1>
    <p>Full time computer engineer, part time cat dad.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div> */}
  </Layout>
);

export default IndexPage;
