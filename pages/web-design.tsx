import Layout from '../components/layout/layout';
import ContentContainer from '../components/layout/content-container';
import IntroCard from '../components/intro-card';
import designPageImages from '../data/design-page-images';
import ProjectList from '../components/projects/project-list';
import ProductLinksList from '../components/products/product-links-list';
import ResponsiveImage from '../components/responsive-image';

export default function WebDesign() {
  return (
    <Layout pageTitle='Web Design'>
      <IntroCard
        title='Web Design'
        text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
        bgImage={
          <ResponsiveImage
            imageSources={designPageImages.web}
            layout='fixed'
            priority={true}
            alt=''
          />
        }
      />
      <ContentContainer>
        <ProjectList projectType='web-design' />
        <ProductLinksList />
      </ContentContainer>
    </Layout>
  );
}
