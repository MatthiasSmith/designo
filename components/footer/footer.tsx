import styled from 'styled-components';
import Image from 'next/image';

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
    margin-top: 2.5rem;
  }

  .social-links-list {
    margin-top: 2.5rem;

    li:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <GetInTouchCard />
      <div className='dark-bg flex-column flex-centered'>
        <Image
          src='/../public/shared/desktop/logo-light.png'
          quality='100'
          layout='fixed'
          height={27}
          width={202}
        />
        <nav className='footer-nav'>
          <ul className='text-center'>
            <li>
              <a>Our company</a>
            </li>
            <li>
              <a>Locations</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <div className='address-container flex-column text-center'>
          <strong>Designo Central Office</strong>
          <span>3886 Wellington Street</span>
          <span>Toronto, Ontario M9C 3J5</span>
        </div>
        <div className='address-container flex-column text-center'>
          <strong>Contact Us (Central Office)</strong>
          <span>P : +1 253-863-8967</span>
          <span>M : contact@designo.co</span>
        </div>
        <ul className='social-links-list flex-row'>
          <li>
            <a>
              <Image
                src='/../public/shared/desktop/icon-facebook.svg'
                layout='fixed'
                height={24}
                width={24}
              />
            </a>
          </li>
          <li>
            <a>
              <Image
                src='/../public/shared/desktop/icon-youtube.svg'
                layout='fixed'
                height={24}
                width={24}
              />
            </a>
          </li>
          <li>
            <a>
              <Image
                src='/../public/shared/desktop/icon-twitter.svg'
                layout='fixed'
                height={24}
                width={24}
              />
            </a>
          </li>
          <li>
            <a>
              <Image
                src='/../public/shared/desktop/icon-pinterest.svg'
                layout='fixed'
                height={24}
                width={24}
              />
            </a>
          </li>
          <li>
            <a>
              <Image
                src='/../public/shared/desktop/icon-instagram.svg'
                layout='fixed'
                height={24}
                width={24}
              />
            </a>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
