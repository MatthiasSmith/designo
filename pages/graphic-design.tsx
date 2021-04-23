import React from 'react';
import Layout from '../components/layout';

import IntroCard from '../components/intro-card';
import ResponsiveImage from '../components/responsive-image';
import designPageImages from '../data/design-page-images';

const GraphicDesign = () => {
  return (
    <Layout>
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
      Graphic Design
    </Layout>
  );
};

export default GraphicDesign;
