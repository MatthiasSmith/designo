import { ImageSourceType } from './image-source-type';

export type ImageSourcesHashType = {
  sm: ImageSourceType | string[] | string;
  md: ImageSourceType | string[] | string;
  lg: ImageSourceType | string[] | string;
};
