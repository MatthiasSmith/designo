import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import Button from '../button';
import MobileNavMenu from './mobile-nav-menu';

const StyledNav = styled.nav`
  .hamburger-menu-btn {
    height: 20px;
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
              src='/../public/shared/desktop/logo-dark.png'
              height={27}
              width={202}
              layout='fixed'
              alt='Designo home.'
            />
          </a>
        </Link>
        <Button
          isIcon={true}
          className='hamburger-menu-btn'
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
                ? '/../public/shared/mobile/icon-close.svg'
                : '/../public/shared/mobile/icon-hamburger.svg'
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
