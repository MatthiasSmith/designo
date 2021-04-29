import React from 'react';
import styled from 'styled-components';

import { TABLET_BP } from '../../constants/constants';

const StyledAddressContactInfo = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  line-height: 1.625rem;
  margin-top: 2.5rem;
  text-align: center;

  @media screen and (min-width: ${TABLET_BP}em) {
    margin-top: 1.9375rem;
    text-align: unset;
  }
`;

const AddressContactInfo = () => {
  return (
    <>
      <StyledAddressContactInfo className='address-container flex-col'>
        <strong>Designo Central Office</strong>
        <span>3886 Wellington Street</span>
        <span>Toronto, Ontario M9C 3J5</span>
      </StyledAddressContactInfo>
      <StyledAddressContactInfo className='address-container flex-col'>
        <strong>Contact Us (Central Office)</strong>
        <span className='bold-gt-sm'>P : +1 253-863-8967</span>
        <span className='bold-gt-sm'>M : contact@designo.co</span>
      </StyledAddressContactInfo>
    </>
  );
};

export default AddressContactInfo;
