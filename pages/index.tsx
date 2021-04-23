import styled from 'styled-components';

import { DESKTOP_BP, TABLET_BP } from '../constants/constants';
import Layout from '../components/layout';
import PageIntroCard from '../components/pages/home/page-intro-card';
import ProjectLinksList from '../components/pages/home/project-links-list';
import QualitiesList from '../components/pages/home/qualities-list';

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
      <PageIntroCard />
      <StyledArticle>
        <ProjectLinksList />
        <QualitiesList />
      </StyledArticle>
    </Layout>
  );
}
