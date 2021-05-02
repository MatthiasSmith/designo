import Layout from '../components/layout/layout';
import ContentContainer from '../components/layout/content-container';
import IntroCard from '../components/intro-card';
import designPageImages from '../data/design-page-images';
import ProjectList from '../components/projects/project-list';
import ProductLinksList from '../components/products/product-links-list';
import { DESKTOP_BP, TABLET_BP } from '../constants/constants';

const AppDesign = () => {
  const bgImagePosition = {
    top: '-10.25rem',
    right: '11.5rem',
  };

  return (
    <Layout pageTitle='App Design'>
      <IntroCard
        title='App Design'
        text='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
        bgImage={
          <picture>
            <source
              media={`(min-width: ${DESKTOP_BP}em)`}
              srcSet={designPageImages.app.lg}
            />
            <source
              media={`(min-width: ${TABLET_BP}em)`}
              srcSet={designPageImages.app.md}
            />
            <img src={designPageImages.app.sm} alt='' />
          </picture>
        }
        bgImagePosition={bgImagePosition}
      />
      <ContentContainer>
        <ProjectList projectType='app-design' />
        <ProductLinksList />
      </ContentContainer>
    </Layout>
  );
};

export default AppDesign;
