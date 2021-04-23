import styled from 'styled-components';
import Image from 'next/image';

import { DESKTOP_BP, TABLET_BP } from '../constants/constants';
import Layout from '../components/layout';
import PageIntroCard from '../components/pages/home/page-intro-card';
import ProjectLinksList from '../components/pages/home/project-links-list';
import QualitiesList from '../components/pages/home/qualities-list';

const StyledBgImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .leaf-bg-top {
    top: 47%;
  }

  .leaf-bg-bottom {
    top: 138%;
    right: 0;
    transform: rotate(180deg);
  }
`;

const StyledArticle = styled.article`
  padding: 7.5rem var(--site-side-padding);

  @media screen and (min-width: ${TABLET_BP}em) {
    padding: 7.5rem 0 4.1875rem;
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    padding: 10rem 0 10rem;
  }
`;

export default function Home() {
  return (
    <Layout>
      <StyledBgImages className='hidden-sm hidden-md'>
        <div className='bg-image leaf-bg-top'>
          <Image
            src='/shared/desktop/bg-pattern-leaf.svg'
            layout='fixed'
            width={1006}
            height={594}
          />
        </div>
        <div className='bg-image leaf-bg-bottom'>
          <Image
            src='/shared/desktop/bg-pattern-leaf.svg'
            layout='fixed'
            width={1006}
            height={594}
          />
        </div>
      </StyledBgImages>
      <PageIntroCard />
      <StyledArticle>
        <ProjectLinksList />
        <QualitiesList />
      </StyledArticle>
    </Layout>
  );
}
