import ContentContainer from '../components/layout/content-container';
import HomeIntroCard from '../components/home/home-intro-card';
import ProductLinksList from '../components/products/product-links-list';
import QualitiesList from '../components/home/qualities-list';

export default function Home() {
  return (
    <>
      <HomeIntroCard />
      <ContentContainer isHome={true}>
        <ProductLinksList />
        <QualitiesList />
      </ContentContainer>
    </>
  );
}
