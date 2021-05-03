import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { TABLET_BP } from '../constants/constants';
import Button from './button';
import MobileNavMenu from './header/mobile-nav-menu';

const StyledNav = styled.nav`
  width: 100%;
  max-width: 69.4375rem;

  .hamburger-menu-btn {
    height: 20px;
  }

  .nav-list {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 2rem;
    text-align: center;
    width: 100%;
  }

  .nav-list-item {
    margin-top: 2rem;
  }

  .nav-link {
    color: ${(props) => (props.isFooter ? 'white' : undefined)};
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    .nav-list {
      border-top: none;
      margin-top: 0;
      width: unset;
    }

    .nav-list-item {
      margin-top: 0;
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        background: #bbb;
        height: 1px;
        width: 100.5%;
        left: -0.03125rem;
        bottom: 0.125rem;
        transform: scaleX(0);
        transform-origin: 100% 50%;
        transition: transform 0.18s ease-out;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: 0 50%;
      }
    }

    .nav-list-item:not(:last-of-type) {
      margin-right: 2.625rem;
    }

    .nav-link {
      font-size: 0.875rem;
      letter-spacing: 2px;
    }
  }
`;

const Nav = ({ isFooter }: { isFooter?: boolean }) => {
  const mobileNavRef = useRef(null);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  useEffect(() => isMobileNavVisible && mobileNavRef.current.focus(), [
    isMobileNavVisible,
  ]);

  const handleHamburgerMenuClick = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
    document.body.style.position =
      !document.body.style.position || document.body.style.position === 'static'
        ? 'fixed'
        : 'static';
  };

  const closeMobileNav = () => {
    setIsMobileNavVisible(false);
    document.body.style.position = 'static';
  };

  return (
    <>
      <StyledNav
        className={`${
          isFooter ? 'flex-col' : 'flex-row'
        } flex-row-gt-sm align-center space-between`}
        isFooter={isFooter}
      >
        <Link href='/'>
          <a className='image-link'>
            <Image
              priority={true}
              src={
                isFooter
                  ? '/shared/desktop/logo-light.png'
                  : '/shared/desktop/logo-dark.png'
              }
              height={27}
              width={202}
              layout='fixed'
              alt='Designo home.'
            />
          </a>
        </Link>
        <ul
          className={`flex-row-gt-sm text-uppercase nav-list${
            isFooter ? '' : ' hidden-sm'
          }`}
        >
          <li className='nav-list-item'>
            <Link href='/about'>
              <a className='nav-link'>Our Company</a>
            </Link>
          </li>
          <li className='nav-list-item'>
            <Link href='/locations'>
              <a className='nav-link'>Locations</a>
            </Link>
          </li>
          <li className='nav-list-item'>
            <Link href='/contact'>
              <a className='nav-link'>Contact</a>
            </Link>
          </li>
        </ul>
        {!isFooter && (
          <Button
            isIcon={true}
            className='hamburger-menu-btn hidden-gt-sm'
            onClick={handleHamburgerMenuClick}
            aria-label={
              isMobileNavVisible
                ? 'Close mobile navigation menu'
                : 'Open mobile navigation menu.'
            }
          >
            <Image
              src={
                isMobileNavVisible
                  ? '/shared/mobile/icon-close.svg'
                  : '/shared/mobile/icon-hamburger.svg'
              }
              width={24}
              height={20}
              layout='fixed'
              alt=''
              priority={true}
            />
          </Button>
        )}
      </StyledNav>
      {isMobileNavVisible && (
        <MobileNavMenu ref={mobileNavRef} onClose={closeMobileNav} />
      )}
    </>
  );
};

export default Nav;
