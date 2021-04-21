import styled from 'styled-components';

import Layout from '../components/layout';
import PageIntroCard from '../components/page-intro-card';
import ProjectLinksList from '../components/pages/home/project-links-list';
import QualitiesList from '../components/pages/home/qualities-list';

const StyledArticle = styled.article`
  padding: 7.5rem var(--site-side-padding);
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
