import React from 'react';

import Layout from '../components/layout/layout';
import ContentContainer from '../components/layout/content-container';
import IntroCard from '../components/intro-card';
import ResponsiveImage from '../components/responsive-image';
import designPageImages from '../data/design-page-images';
import ProductLinksList from '../components/products/product-links-list';
import ProjectList from '../components/projects/project-list';

const GraphicDesign = () => {
  return (
    <Layout pageTitle='Graphic Design'>
      <IntroCard
        title='Graphic Design'
        text='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
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
        <ProjectList projectType='graphic-design' />
        <ProductLinksList />
      </ContentContainer>
    </Layout>
  );
};

export default GraphicDesign;
