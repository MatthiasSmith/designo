import React from 'react';

import Layout from '../components/layout/layout';
import IntroCard from '../components/intro-card';
import ResponsiveImage from '../components/responsive-image';
import designPageImages from '../data/design-page-images';

const AppDesign = () => {
  return (
    <Layout>
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
      app design
    </Layout>
  );
};

export default AppDesign;
