import Layout from '../components/layout/layout';
import ContentContainer from '../components/layout/content-container';
import IntroCard from '../components/intro-card';
import designPageImages from '../data/design-page-images';
import ProjectList from '../components/projects/project-list';
import ProductLinksList from '../components/products/product-links-list';
import { DESKTOP_BP, TABLET_BP } from '../constants/constants';

export default function WebDesign() {
  return (
    <Layout pageTitle='Web Design'>
      <IntroCard
        title='Web Design'
        text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
        bgImage={
          <picture>
            <source
              media={`(min-width: ${DESKTOP_BP}em)`}
              srcSet={designPageImages.web.lg as string}
            />
            <source
              media={`(min-width: ${TABLET_BP}em)`}
              srcSet={designPageImages.web.md as string}
            />
            <img src={designPageImages.web.sm as string} alt='' />
          </picture>
        }
      />
      <ContentContainer>
        <ProjectList projectType='web-design' />
        <ProductLinksList />
      </ContentContainer>
    </Layout>
  );
}
