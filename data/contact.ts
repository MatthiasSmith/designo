import { ImageSourcesHashType } from '../types/image-sources-hash-type';

interface ContactHashType {
  [key: string]: ImageSourcesHashType;
}

const contact: ContactHashType = {
  introBg: {
    lg: {
      src: '/contact/desktop/bg-pattern-hero-desktop.svg',
      width: 640,
      height: 640,
    },
    md: {
      src: '/contact/desktop/bg-pattern-hero-desktop.svg',
      width: 640,
      height: 640,
    },
    sm: {
      src: '/contact/mobile/bg-pattern-hero-contact-mobile.svg',
      width: 876,
      height: 990,
    },
  },
};

export default contact;
