import React from 'react';
import Layout from '../components/layout';

import IntroCard from '../components/intro-card';
import ResponsiveImage from '../components/responsive-image';
import designPageImages from '../data/design-page-images';

const About = () => {
  return (
    <Layout>
      <IntroCard
        title='About Us'
        text='Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.'
        bgImage={
          <ResponsiveImage
            imageSources={designPageImages}
            layout='fixed'
            width={876}
            height={584}
            priority={true}
          />
        }
        paddingTopBottom='5rem'
      />
      About us
    </Layout>
  );
};

export default About;
