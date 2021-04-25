import React, { useLayoutEffect, useState } from 'react';
import Image from 'next/image';

import { TABLET_BP, DESKTOP_BP } from '../constants/constants';

const ResponsiveImage = (props) => {
  const { imageSources, imageIndex, width, height, ...otherProps } = props;
  const [screenSize, setScreenSize] = useState('sm');
  const imageProps = imageSources[screenSize];

  useLayoutEffect(() => {
    const clientWidth = document.documentElement.clientWidth;
    if (clientWidth >= TABLET_BP * 16 && clientWidth < DESKTOP_BP * 16) {
      setScreenSize('md');
    } else if (clientWidth >= DESKTOP_BP * 16) {
      setScreenSize('lg');
    }
  }, []);

  return (
    <Image
      src={imageProps.src || imageProps[imageIndex] || imageProps[0]}
      width={imageSources[screenSize].width || width || undefined}
      height={imageSources[screenSize].height || height || undefined}
      {...otherProps}
    />
  );
};

export default ResponsiveImage;
