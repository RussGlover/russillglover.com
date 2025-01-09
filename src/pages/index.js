import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Russill Glover</h1>
    <p>Senior Software Engineer. Maximizing productivity for Frontend Developers at Stripe.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div> */}
  </Layout>
);

export default IndexPage;
