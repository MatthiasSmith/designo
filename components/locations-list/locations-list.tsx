import React from 'react';
import styled from 'styled-components';

import locations from '../../data/locations';
import LocationsListItem from './locations-list-item';

const StyledLocationsList = styled.ul`
  padding-bottom: 7.5rem;
`;

const LocationsList = () => {
  return (
    <StyledLocationsList>
      {Object.keys(locations).map((key) => (
        <LocationsListItem
          key={locations[key].name}
          location={locations[key]}
        />
      ))}
    </StyledLocationsList>
  );
};

export default LocationsList;
