import React from 'react';
import styled from 'styled-components';
import { Scene } from 'react-scrollmagic';

import Layout from '../components/layout/layout';
import about from '../data/about';
import { DESKTOP_BP, TABLET_BP } from '../constants/constants';
import AboutCard from '../components/pages/about/about-card';
import LocationLinksList from '../components/location-links/location-links-list';
import AboutIntroCard from '../components/pages/about/about-intro-card';

const StyledContainer = styled.div`
  padding-bottom: 7.5rem;

  .animatable {
    transition: all 0.6s ease-out;
    opacity: 0;
    transform: translateY(2rem);

    @media screen and (prefers-reduced-motion: reduce) {
      transform: unset;
    }
  }

  .fade-in.animatable {
    opacity: 1;
    transform: translate(0rem, 0rem);
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    padding-top: 7.5rem;
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
`;

const About = () => {
  return (
    <Layout pageTitle='About Us'>
      <AboutIntroCard />
      <StyledContainer>
        <Scene classToggle='fade-in' reverse={false}>
          <div className='animatable'>
            <AboutCard
              imageSources={about.worldClassTalent}
              title='World-class talent'
            >
              <p>
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </p>
              <p>
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </AboutCard>
          </div>
        </Scene>
        <LocationLinksList />
        <Scene classToggle='fade-in' reverse={false}>
          <div className='animatable'>
            <AboutCard
              imageSources={about.theRealDeal}
              title='The real deal'
              flipSides={true}
            >
              <p>
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p>
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </AboutCard>
          </div>
        </Scene>
      </StyledContainer>
    </Layout>
  );
};

export default About;
