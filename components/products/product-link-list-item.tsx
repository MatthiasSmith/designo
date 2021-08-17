import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Scene } from 'react-scrollmagic';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';
import ResponsiveImage from '../responsive-image';
import { ImageSourcesHashType } from '../../types/image-sources-hash-type';

const Styled = styled.li`
  --transparent-orange-bg: rgba(231, 129, 107, 0.65);
  border-radius: var(--border-radius);
  color: white;
  opacity: 0;
  overflow: hidden;
  position: relative;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transform: translateX(50%);

  @media screen and (prefers-reduced-motion: reduce) {
    transition: opacity 0.6s ease-out;
    transform: unset !important; // override the desktop setting for the first element
  }

  &.fade-in {
    opacity: 1;
    transform: translate(0, 0);
  }

  &:nth-of-type(2) {
    transition-delay: 0.25s;
  }

  &:nth-of-type(3) {
    transition-delay: 0.5s;
  }

  &:not(:first-of-type) {
    margin-top: 1.5rem;
  }

  .product-page-link:focus .view-projects-container {
    border: 1px solid white;
    border-radius: 2px;
  }

  .content-container {
    background-color: rgba(0, 0, 0, 0.55);
    padding: 5.625rem var(--site-side-padding);
    transition: background-color 0.3s ease-out;

    &:hover {
      background-color: var(--transparent-orange-bg);
    }
  }

  .heading-md {
    margin-bottom: 0.75rem;
  }

  .view-projects-container {
    width: 90%;
    margin: 0 auto;
  }

  .view-projects-text {
    font-size: 0.9375rem;
    letter-spacing: 5px;
    margin-right: 1rem;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    .content-container {
      padding: 3.3125rem var(--site-side-padding);
    }

    .view-projects-container {
      width: 50%;
    }

    .heading-md {
      margin-bottom: 1.4rem;
    }

    .link-text {
      margin-right: 1.3125rem;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    &:first-of-type:not(.fade-in) {
      transform: translateX(-50%);
    }

    ${(props) =>
      props.isHome
        ? css`
            &:first-of-type {
              grid-column: 1 / 1;
              grid-row: 1 / span 2;

              .content-container {
                padding: 17.0625rem 0;
              }
            }

            &:not(:first-of-type) {
              margin-top: 0;

              .content-container {
                padding: 6.6875rem 0;
              }
            }
          `
        : css`
            &:not(:first-of-type) {
              margin-top: 0;
            }

            .content-container {
              padding: 6.6875rem 0;
            }
          `}
  }
`;

const ProductLinkListItem = ({
  title,
  href,
  bgImages,
}: {
  title: string;
  href: string;
  bgImages: ImageSourcesHashType;
}) => {
  const router = useRouter();
  const productRoute = `/${title.toLowerCase().split(' ').join('-')}`;
  const isHomePage = router.asPath === '/';

  return (
    <>
      {router.asPath !== productRoute && (
        <Scene
          classToggle='fade-in'
          triggerElement='.product-link-item'
          reverse={false}
          offset={-100}
        >
          <Styled className='product-link-item' isHome={isHomePage}>
            <div className='bg-image' aria-hidden='true'>
              <ResponsiveImage
                imageSources={bgImages}
                imageIndex={isHomePage ? 0 : 1}
                layout='fill'
                objectFit='cover'
                alt=''
              />
            </div>
            <Link href={href}>
              <a className='product-page-link'>
                <div className='top-layer content-container text-center text-uppercase'>
                  <h2 className='heading-md'>{title}</h2>
                  <div className='view-projects-container'>
                    <span className='view-projects-text'>View Projects</span>
                    <Image
                      src='/shared/desktop/icon-right-arrow.svg'
                      layout='fixed'
                      width={7}
                      height={10}
                      alt=''
                    />
                  </div>
                </div>
              </a>
            </Link>
          </Styled>
        </Scene>
      )}
    </>
  );
};

export default ProductLinkListItem;
