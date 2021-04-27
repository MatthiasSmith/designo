import React from 'react';
import Layout from '../components/layout/layout';

import IntroCard from '../components/intro-card';
import ResponsiveImage from '../components/responsive-image';
import pagesData from '../data/pages-data';
import { DESKTOP_BP, TABLET_BP } from '../constants/constants';

const About = () => {
  const bgPosition = {
    top: '-8.75rem',
    right: '31.35rem',
  };

  return (
    <Layout>
      <IntroCard
        title='About Us'
        text='Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.'
        bgImage={
          <ResponsiveImage
            imageSources={pagesData.about.introBg}
            layout='fixed'
            priority={true}
          />
        }
        bgImagePosition={bgPosition}
        paddingTopBottom='5rem'
        sideContent={
          <picture>
            <source
              media={`(min-width: ${DESKTOP_BP}em)`}
              srcSet='/about/desktop/image-about-hero.jpg'
            />
            <source
              media={`(min-width: ${TABLET_BP}em)`}
              srcSet='/about/tablet/image-about-hero.jpg'
            />
            <img src='/about/mobile/image-about-hero.jpg' alt='' />
          </picture>
        }
        sideContentOrder={1}
      />
      about us
    </Layout>
  );
};

export default About;
