import { ImageSourcesHashType } from '../types/image-sources-hash-type';

interface DesignPageImagesHashType {
  web: ImageSourcesHashType;
  app: ImageSourcesHashType;
  graphic: ImageSourcesHashType;
}

const designPageImages: DesignPageImagesHashType = {
  web: {
    sm: '/shared/mobile/bg-pattern-design-pages-intro-mobile.svg',
    md: '/shared/tablet/bg-pattern-design-pages-intro-tablet.svg',
    lg: '/web-design/desktop/bg-pattern-intro-web.svg',
  },
  app: {
    sm: '/shared/mobile/bg-pattern-design-pages-intro-mobile.svg',
    md: '/shared/tablet/bg-pattern-design-pages-intro-tablet.svg',
    lg: '/app-design/desktop/bg-pattern-intro-app.svg',
  },
  graphic: {
    sm: '/shared/mobile/bg-pattern-design-pages-intro-mobile.svg',
    md: '/shared/tablet/bg-pattern-design-pages-intro-tablet.svg',
    lg: '/graphic-design/desktop/bg-pattern-intro-graphic.svg',
  },
};

export default designPageImages;
