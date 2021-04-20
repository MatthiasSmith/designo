import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const StyledNav = styled.nav``;

const Nav = () => {
  return (
    <StyledNav>
      <ul className='flex-row'>
        <li className='flex'>
          <Link href='/'>
            <a>
              <Image
                priority={true}
                src='/../public/shared/desktop/logo-dark.png'
                height={27}
                width={202}
                quality='100'
                layout='fixed'
              />
            </a>
          </Link>
        </li>
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
    </StyledNav>
  );
};

export default Nav;
