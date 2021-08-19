import { ImageSourceType } from '../types/image-source-type';
import { ImageSourcesHashType } from '../types/image-sources-hash-type';

interface DesignPageImagesHashType {
  web: ImageSourcesHashType;
  app: ImageSourcesHashType;
  graphic: ImageSourcesHashType;
}

const width = 876;
const height = 584;
const smSharedImageSrc: ImageSourceType = {
  src: '/shared/mobile/bg-pattern-design-pages-intro-mobile.svg',
  width,
  height,
};
const mdSharedImageSrc: ImageSourceType = {
  src: '/shared/tablet/bg-pattern-design-pages-intro-tablet.svg',
  width,
  height,
};

const designPageImages: DesignPageImagesHashType = {
  web: {
    sm: smSharedImageSrc,
    md: mdSharedImageSrc,
    lg: {
      src: '/web-design/desktop/bg-pattern-intro-web.svg',
      width,
      height,
    },
  },
  app: {
    sm: smSharedImageSrc,
    md: mdSharedImageSrc,
    lg: {
      src: '/app-design/desktop/bg-pattern-intro-app.svg',
      width,
      height,
    },
  },
  graphic: {
    sm: smSharedImageSrc,
    md: mdSharedImageSrc,
    lg: {
      src: '/graphic-design/desktop/bg-pattern-intro-graphic.svg',
      width,
      height,
    },
  },
};

export default designPageImages;
