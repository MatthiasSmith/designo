import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import IntroCard from '../components/intro-card';
import ResponsiveImage from '../components/responsive-image';
import pages from '../data/pages';
import { DESKTOP_BP, TABLET_BP } from '../constants/constants';
import AboutCard from '../components/pages/about/about-card';
import LocationLinksList from '../components/pages/about/location-links-list';

const StyledContainer = styled.div`
  padding-bottom: 7.5rem;

  @media screen and (min-width: ${TABLET_BP}em) {
    padding-top: 7.5rem;
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
`;

const About = () => {
  const introBgImagePosition = {
    top: '-8.75rem',
    right: '31.35rem',
  };
  const imageSources = pages.about;

  return (
    <Layout pageTitle='About Us'>
      <IntroCard
        title='About Us'
        text='Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.'
        bgImage={
          <ResponsiveImage
            imageSources={pages.about.introBg}
            layout='fixed'
            priority={true}
          />
        }
        bgImagePosition={introBgImagePosition}
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
      <StyledContainer>
        <AboutCard
          imageSources={imageSources.worldClassTalent}
          title='World-class talent'
        >
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </AboutCard>
        <LocationLinksList />
        <AboutCard
          imageSources={imageSources.theRealDeal}
          title='The real deal'
          flipSides={true}
        >
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </AboutCard>
      </StyledContainer>
    </Layout>
  );
};

export default About;
