import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import Button from '../button';

const StyledNav = styled.nav`
  .hamburger-menu-btn {
    height: 20px;
  }
`;

const Nav = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <StyledNav className='flex-row align-center space-between'>
      <Link href='/'>
        <a className='image-link'>
          <Image
            priority={true}
            src='/../public/shared/desktop/logo-dark.png'
            height={27}
            width={202}
            quality='100'
            layout='fixed'
            alt='Designo home.'
          />
        </a>
      </Link>
      <Button isIcon={true} className='hamburger-menu-btn'>
        <Image
          src='/../public/shared/mobile/icon-hamburger.svg'
          width={24}
          height={20}
          layout='fixed'
        />
      </Button>
      {isMobileNavVisible && (
        <ul className='flex-row'>
          <li>
            <Link href='/our-company'>
              <a>Our Company</a>
            </Link>
          </li>
          <li>
            <Link href='/locations'>
              <a>Locations</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      )}
    </StyledNav>
  );
};

export default Nav;
