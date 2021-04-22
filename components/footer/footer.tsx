import styled from 'styled-components';
import Image from 'next/image';

import { TABLET_BP } from '../../constants/constants';
import GetInTouchCard from './get-in-touch-card';

const StyledFooter = styled.footer`
  .dark-bg {
    background-color: var(--black);
    margin-top: -12rem;
    padding: 15.8125rem var(--site-side-padding) 4rem;
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

  .address-container {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
    line-height: 1.625rem;
    margin-top: 2.5rem;
    text-align: center;
  }

  .social-links-list {
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
`;

const Footer = () => {
  return (
    <StyledFooter>
      <GetInTouchCard />
      <div className='dark-bg flex-column flex-centered'>
        <div className='flex-row-gt-sm full-width'>
          <div className='flex'>
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
          <div className='address-container flex-column'>
            <strong>Designo Central Office</strong>
            <span>3886 Wellington Street</span>
            <span>Toronto, Ontario M9C 3J5</span>
          </div>
          <div className='address-container flex-column'>
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
