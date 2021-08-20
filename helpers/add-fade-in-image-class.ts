import { SyntheticEvent } from 'react';

const addFadeInImageClass = (
  event: SyntheticEvent<HTMLImageElement, Event>
): void => {
  if ((event.target as HTMLImageElement).srcset) {
    (event.target as HTMLImageElement).classList.add('fade-in-image');
  }
};

export default addFadeInImageClass;
