import React from 'react';

import Layout from '../components/layout/layout';
import ContentContainer from '../components/layout/content-container';
import IntroCard from '../components/intro-card';
import ResponsiveImage from '../components/responsive-image';
import designPageImages from '../data/design-page-images';
import ProjectList from '../components/projects/project-list';
import ProductLinksList from '../components/products/product-links-list';

const AppDesign = () => {
  return (
    <Layout pageTitle='App Design'>
      <IntroCard
        title='App Design'
        text='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
        bgImage={
          <ResponsiveImage
            imageSources={designPageImages}
            layout='fixed'
            width={876}
            height={584}
            priority={true}
          />
        }
      />
      <ContentContainer>
        <ProjectList projectType='app-design' />
        <ProductLinksList />
      </ContentContainer>
    </Layout>
  );
};

export default AppDesign;
