import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { TABLET_BP, DESKTOP_BP } from '../constants/constants';
import addFadeInImageClass from '../helpers/add-fade-in-image-class';
import useCurrentWidth from '../hooks/use-current-width';

interface ImageSourceType {
  src: string;
  width: number;
  height: number;
}

interface ImageSourcesType {
  lg: ImageSourceType;
  md: ImageSourceType;
  sm: ImageSourceType;
}

const ResponsiveImage = (props) => {
  const clientWidth = useCurrentWidth();
  const {
    imageSources,
    imageIndex,
    ...otherProps
  }: { imageSources: ImageSourcesType; imageIndex: number } = props;

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
      {...otherProps}
    />
  );
};

export default ResponsiveImage;
