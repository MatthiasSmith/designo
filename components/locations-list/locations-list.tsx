import React from 'react';
import styled from 'styled-components';

import locations from '../../data/locations';
import Location from './location';

const StyledLocationsList = styled.ul`
  padding-bottom: 7.5rem;

  li:not(:first-of-type) {
    margin-top: 2.5rem;
  }
`;

const LocationsList = () => {
  return (
    <StyledLocationsList>
      {Object.keys(locations).map((key) => (
        <li key={locations[key].name} id={locations[key].id}>
          <Location location={locations[key]} />
        </li>
      ))}
    </StyledLocationsList>
  );
};

export default LocationsList;
