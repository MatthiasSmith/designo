import React from 'react';
import styled from 'styled-components';
import { DESKTOP_BP } from '../../constants/constants';

import qualities from '../../data/qualities';
import QualityItem from './quality-item';

const Styled = styled.ul`
  padding: 7.5rem 0 0;

  @media screen and (min-width: ${DESKTOP_BP}em) {
    padding: 10rem 0 0;
  }
`;

const QualitiesList = () => {
  return (
    <Styled className='company-qualities-list flex-row-gt-md'>
      {qualities.map((quality) => (
        <QualityItem {...quality} key={quality.title} />
      ))}
    </Styled>
  );
};

export default QualitiesList;
