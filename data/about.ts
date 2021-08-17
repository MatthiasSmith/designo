import { ImageSourcesHashType } from '../types/image-sources-hash-type';

interface AboutHashType {
  [key: string]: ImageSourcesHashType;
}

const about: AboutHashType = {
  hero: {
    lg: {
      src: '/about/desktop/image-about-hero.jpg',
      width: 476,
      height: 480,
    },
    md: {
      src: '/about/tablet/image-about-hero.jpg',
      width: 689,
      height: 320,
    },
    sm: {
      src: '/about/mobile/image-about-hero.jpg',
      width: 375,
      height: 320,
    },
  },
  introBg: {
    lg: {
      src: '/about/desktop/bg-pattern-hero-about-desktop.svg',
      width: 640,
      height: 640,
    },
    md: {
      src: '/about/desktop/bg-pattern-hero-about-desktop.svg',
      width: 640,
      height: 640,
    },
    sm: {
      src: '/about/mobile/bg-pattern-hero-about-mobile.svg',
      width: 876,
      height: 946,
    },
  },
  worldClassTalent: {
    lg: {
      src: '/about/desktop/image-world-class-talent.jpg',
      width: 476,
      height: 640,
    },
    md: {
      src: '/about/tablet/image-world-class-talent.jpg',
      width: 689,
      height: 320,
    },
    sm: {
      src: '/about/mobile/image-world-class-talent.jpg',
      width: 375,
      height: 320,
    },
  },
  theRealDeal: {
    lg: {
      src: '/about/desktop/image-real-deal.jpg',
      width: 476,
      height: 640,
    },
    md: {
      src: '/about/tablet/image-real-deal.jpg',
      width: 689,
      height: 320,
    },
    sm: {
      src: '/about/mobile/image-real-deal.jpg',
      width: 375,
      height: 320,
    },
  },
};

export default about;
