import Image from 'next/image';

import { ImageSourcesHashType } from '../types/image-sources-hash-type';
import { TABLET_BP, DESKTOP_BP } from '../constants/constants';
import addFadeInImageClass from '../helpers/add-fade-in-image-class';
import useCurrentWidth from '../hooks/use-current-width';

interface ResponsiveImageProps {
  imageSources: ImageSourcesHashType;
  imageIndex?: number;
  alt: string;
}

const ResponsiveImage = (props) => {
  const clientWidth = useCurrentWidth();
  const { imageSources, imageIndex, alt, ...otherProps }: ResponsiveImageProps =
    props;

  let screenSize = 'sm';
  if (clientWidth >= TABLET_BP * 16 && clientWidth < DESKTOP_BP * 16) {
    screenSize = 'md';
  } else if (clientWidth >= DESKTOP_BP * 16) {
    screenSize = 'lg';
  }
  const imageProps = imageSources[screenSize];

  return (
    <Image
      src={imageProps.src || imageProps[imageIndex] || imageProps[0]}
      width={imageSources[screenSize].width || undefined}
      height={imageSources[screenSize].height || undefined}
      onLoad={addFadeInImageClass}
      className='opacity-0'
      alt={alt || ''}
      {...otherProps}
    />
  );
};

export default ResponsiveImage;
