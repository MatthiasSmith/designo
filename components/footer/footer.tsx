import styled from 'styled-components';
import Image from 'next/image';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';
import GetInTouchCard from './get-in-touch-card';

const StyledFooter = styled.footer`
  .dark-bg {
    background-color: var(--black);
    margin-top: -12rem;
    padding: 15.8125rem var(--site-side-padding) 4rem;
  }

  .nav-row-container,
  .bottom-content-container {
    margin: 0 auto;
    max-width: calc(
      var(--site-content-max-width) - var(--site-side-padding-md) * 2
    );
  }

  .logo-container {
    text-align: center;
  }

  .footer-nav {
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;

    li {
      color: white;
      font-size: 0.875rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 2rem;
    }
  }

  .bottom-content-container {
    align-items: center;
  }

  .address-container {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
    line-height: 1.625rem;
    margin-top: 2.5rem;
    text-align: center;
  }

  .social-links-list {
    justify-content: center;
    margin-top: 2.5rem;

    li:not(:last-of-type) {
      margin-right: 1rem;
    }
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    .dark-bg {
      margin-top: -5.25rem;
      padding: 10rem var(--site-side-padding-md) 5rem;
    }

    .logo-container {
      text-align: unset;
    }

    .footer-nav {
      border: none;
      margin-top: 0;
      width: unset;

      li {
        margin-top: 0;
        margin-left: 2.625rem;
      }
    }

    .bottom-content-container {
      align-items: flex-end;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 2.5rem;
    }

    .address-container {
      margin-top: 1.9375rem;
      text-align: unset;
    }

    .bold-gt-sm {
      font-weight: var(--font-weight-bold);
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    .dark-bg {
      margin-top: -4.5rem;
      padding: 9rem var(--site-side-padding-md) 4.5rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <GetInTouchCard />
      <div className='dark-bg flex-col flex-centered'>
        <div className='flex-row-gt-sm full-width nav-row-container'>
          <div className='flex logo-container'>
            <Image
              src='/shared/desktop/logo-light.png'
              quality='100'
              layout='fixed'
              height={27}
              width={202}
            />
          </div>
          <nav className='footer-nav'>
            <ul className='text-center flex-row-gt-sm'>
              <li>
                <a className='link-text'>Our company</a>
              </li>
              <li>
                <a className='link-text'>Locations</a>
              </li>
              <li>
                <a className='link-text'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='bottom-content-container flex-row-gt-sm space-between full-width'>
          <div className='address-container flex-col'>
            <strong>Designo Central Office</strong>
            <span>3886 Wellington Street</span>
            <span>Toronto, Ontario M9C 3J5</span>
          </div>
          <div className='address-container flex-col'>
            <strong>Contact Us (Central Office)</strong>
            <span className='bold-gt-sm'>P : +1 253-863-8967</span>
            <span className='bold-gt-sm'>M : contact@designo.co</span>
          </div>
          <ul className='social-links-list flex-row'>
            <li>
              <a>
                <Image
                  src='/shared/desktop/icon-facebook.svg'
                  layout='fixed'
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  src='/shared/desktop/icon-youtube.svg'
                  layout='fixed'
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  src='/shared/desktop/icon-twitter.svg'
                  layout='fixed'
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  src='/shared/desktop/icon-pinterest.svg'
                  layout='fixed'
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  src='/shared/desktop/icon-instagram.svg'
                  layout='fixed'
                  height={24}
                  width={24}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
