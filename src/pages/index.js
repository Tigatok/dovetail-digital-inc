import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Hero from 'sections/hero';
import About from 'sections/about';
import Printing from 'sections/3d-printing';
import Shopify from 'sections/shopify';
import ClientFeedback from 'sections/client-feedback';
import Team from 'sections/team';
import WorkFlow from 'sections/workflow';
import CustomSoftware from 'sections/custom-software';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Purpose driven software."
          title="Dovetail Digital"
        />
        <Hero />
        <About />
        <WorkFlow />
        <Printing />
        <Shopify />
        <CustomSoftware />
        <ClientFeedback />
        <Team />
      </Layout>
    </ThemeProvider>
  );
}
