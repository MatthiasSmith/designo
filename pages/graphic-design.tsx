import Layout from '../components/layout/layout';
import ContentContainer from '../components/layout/content-container';
import IntroCard from '../components/intro-card';
import designPageImages from '../data/design-page-images';
import ProductLinksList from '../components/products/product-links-list';
import ProjectList from '../components/projects/project-list';
import { DESKTOP_BP, TABLET_BP } from '../constants/constants';

const GraphicDesign = () => {
  const bgImagePosition = {
    top: '-10rem',
    right: '10.5rem',
  };

  return (
    <Layout pageTitle='Graphic Design'>
      <IntroCard
        title='Graphic Design'
        text='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
        bgImage={
          <picture>
            <source
              media={`(min-width: ${DESKTOP_BP}em)`}
              srcSet={designPageImages.graphic.lg}
            />
            <source
              media={`(min-width: ${TABLET_BP}em)`}
              srcSet={designPageImages.graphic.md}
            />
            <img src={designPageImages.graphic.sm} alt='' />
          </picture>
        }
        bgImagePosition={bgImagePosition}
      />
      <ContentContainer>
        <ProjectList projectType='graphic-design' />
        <ProductLinksList />
      </ContentContainer>
    </Layout>
  );
};

export default GraphicDesign;
