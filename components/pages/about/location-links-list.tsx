import React from 'react';
import styled from 'styled-components';
import { DESKTOP_BP } from '../../../constants/constants';

import locations from '../../../data/locations';
import LocationLinksListItem from './location-links-list-item';

const StyledLocationLinksList = styled.ul`
  padding: 7.5rem 0;

  @media screen and (min-width: ${DESKTOP_BP}em) {
    padding: 10rem 0;
    &.flex-centered {
      justify-content: space-around;
    }
  }
`;

const LocationLinksList = () => {
  return (
    <StyledLocationLinksList className='flex-col flex-row-gt-md flex-centered text-center'>
      {Object.keys(locations).map((key) => (
        <LocationLinksListItem
          key={key}
          name={locations[key].name}
          image={locations[key].illustration}
          href={locations[key].url}
        />
      ))}
    </StyledLocationLinksList>
  );
};

export default LocationLinksList;
