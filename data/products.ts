import { ImageSourcesHashType } from '../types/image-sources-hash-type';

export interface ProductType {
  title: string;
  href: string;
  imageSources: ImageSourcesHashType;
}

const products: ProductType[] = [
  {
    title: 'Web Design',
    href: '/web-design',
    imageSources: {
      sm: ['/home/mobile/image-web-design.jpg'],
      md: ['/home/tablet/image-web-design.jpg'],
      lg: [
        '/home/desktop/image-web-design-large.jpg',
        '/home/desktop/image-web-design-small.jpg',
      ],
    },
  },
  {
    title: 'App Design',
    href: '/app-design',
    imageSources: {
      sm: ['/home/mobile/image-app-design.jpg'],
      md: ['/home/tablet/image-app-design.jpg'],
      lg: ['/home/desktop/image-app-design.jpg'],
    },
  },
  {
    title: 'Graphic Design',
    href: '/graphic-design',
    imageSources: {
      sm: ['/home/mobile/image-graphic-design.jpg'],
      md: ['/home/tablet/image-graphic-design.jpg'],
      lg: ['/home/desktop/image-graphic-design.jpg'],
    },
  },
];

export default products;
