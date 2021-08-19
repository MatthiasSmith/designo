import ContentContainer from '../components/layout/content-container';
import IntroCard from '../components/intro-card';
import designPageImages from '../data/design-page-images';
import ProductLinksList from '../components/products/product-links-list';
import ProjectList from '../components/projects/project-list';
import ResponsiveImage from '../components/responsive-image';

const GraphicDesign = () => {
  const bgImagePosition = {
    top: '-10rem',
    right: '10.5rem',
  };

  return (
    <>
      <IntroCard
        title='Graphic Design'
        text='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
        bgImage={
          <ResponsiveImage
            imageSources={designPageImages.graphic}
            layout='fixed'
            priority={true}
            alt=''
          />
        }
        bgImagePosition={bgImagePosition}
      />
      <ContentContainer>
        <ProjectList projectType='graphic-design' />
        <ProductLinksList />
      </ContentContainer>
    </>
  );
};

export default GraphicDesign;
