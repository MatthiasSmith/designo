import styled from 'styled-components';
// import Image from 'next/image';

import { DESKTOP_BP, TABLET_BP } from '../constants/constants';
import Layout from '../components/layout';
import IntroCard from '../components/intro-card';
import ResponsiveImage from '../components/responsive-image';
import designPageImages from '../data/design-page-images';
import ProjectList from '../components/projects/project-list';

const StyledContentContainer = styled.div`
  padding: 6rem var(--site-side-padding);

  @media screen and (min-width: ${TABLET_BP}em) {
    padding: 7.5rem 0 4.1875rem;
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    padding: 10rem 0 10rem;
  }
`;

export default function WebDesign() {
  return (
    <Layout>
      <IntroCard
        title='Web Design'
        text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
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
      <StyledContentContainer>
        <ProjectList projectType='web-design' />
      </StyledContentContainer>
    </Layout>
  );
}
