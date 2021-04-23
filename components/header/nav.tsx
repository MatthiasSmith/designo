import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { TABLET_BP } from '../../constants/constants';
import Button from '../button';
import MobileNavMenu from './mobile-nav-menu';

const StyledNav = styled.nav`
  .hamburger-menu-btn {
    height: 20px;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    .nav-list-item {
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

const Nav = () => {
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
      <StyledNav className='flex-row align-center space-between'>
        <Link href='/'>
          <a className='image-link'>
            <Image
              priority={true}
              src='/shared/desktop/logo-dark.png'
              height={27}
              width={202}
              layout='fixed'
              alt='Designo home.'
            />
          </a>
        </Link>
        <ul className='flex-row text-uppercase hidden-sm'>
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
          />
        </Button>
      </StyledNav>
      {isMobileNavVisible && (
        <MobileNavMenu ref={mobileNavRef} onClose={closeMobileNav} />
      )}
    </>
  );
};

export default Nav;
