import { Router } from 'next/router';
import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';
import products from '../../data/products';
import ProductLinkListItem from './product-link-list-item';

const StyledProductLinksList = styled.ul`
  ${(props) =>
    props.isHome
      ? css`
          @media screen and (min-width: ${DESKTOP_BP}em) {
            grid-template-rows: 1fr 1fr;
            row-gap: 1.5rem;
          }
        `
      : css`
          margin-top: 6rem;

          @media screen and (min-width: ${TABLET_BP}em) {
            margin-top: 7.5rem;
          }
        `}

  @media screen and (min-width: ${DESKTOP_BP}em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.875rem;
  }
`;

const ProductLinksList = () => {
  const router = useRouter();

  return (
    <StyledProductLinksList isHome={router.asPath === '/'}>
      {products.map((project) => (
        <ProductLinkListItem
          title={project.title}
          href={project.href}
          bgImages={project.imageSources}
          key={project.title}
        />
      ))}
    </StyledProductLinksList>
  );
};

export default ProductLinksList;
