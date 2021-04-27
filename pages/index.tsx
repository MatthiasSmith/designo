import Layout from '../components/layout/layout';
import ContentContainer from '../components/layout/content-container';
import PageIntroCard from '../components/pages/home/page-intro-card';
import ProductLinksList from '../components/products/product-links-list';
import QualitiesList from '../components/pages/home/qualities-list';

export default function Home() {
  return (
    <Layout>
      <PageIntroCard />
      <ContentContainer isHome={true}>
        <ProductLinksList />
        <QualitiesList />
      </ContentContainer>
    </Layout>
  );
}
