import ContentContainer from '../components/layout/content-container';
import IntroCard from '../components/intro-card';
import designPageImages from '../data/design-page-images';
import ProjectList from '../components/projects/project-list';
import ProductLinksList from '../components/products/product-links-list';
import ResponsiveImage from '../components/responsive-image';

const AppDesign = () => {
  const bgImagePosition = {
    top: '-10.25rem',
    right: '11.5rem',
  };

  return (
    <>
      <IntroCard
        title='App Design'
        text='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
        bgImage={
          <ResponsiveImage
            imageSources={designPageImages.app}
            layout='fixed'
            priority={true}
            alt=''
          />
        }
        bgImagePosition={bgImagePosition}
      />
      <ContentContainer>
        <ProjectList projectType='app-design' />
        <ProductLinksList />
      </ContentContainer>
    </>
  );
};

export default AppDesign;
