import React, { useLayoutEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';

import { TABLET_BP, DESKTOP_BP } from '../constants/constants';

const ResponsiveImage = (props) => {
  const { imageSources, imageIndex, ...otherProps } = props;
  const [screenSize, setScreenSize] = useState('sm');

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
      src={
        imageSources[screenSize].length
          ? imageSources[screenSize][imageIndex]
          : imageSources[screenSize][0]
      }
      {...otherProps}
    />
  );
};

export default ResponsiveImage;
