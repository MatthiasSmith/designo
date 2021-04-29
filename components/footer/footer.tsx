import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';
import GetInTouchCard from './get-in-touch-card';
import Nav from '../nav';

const StyledFooter = styled.footer`
  .dark-bg {
    background-color: var(--black);
    margin-top: ${(props) => (props.isContactPage ? '0' : '-12rem')};
    padding: ${(props) => (props.isContactPage ? '4rem' : '15.8125rem')}
      var(--site-side-padding) 4rem;
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
      margin-top: ${(props) => (props.isContactPage ? '0' : '-5.25rem')};
      padding: ${(props) => (props.isContactPage ? '3.75rem' : '10rem')}
        var(--site-side-padding-md) 3.75rem;
    }

    .logo-container {
      text-align: unset;
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
      margin-top: ${(props) => (props.isContactPage ? '0' : '-4.5rem')};
      padding: ${(props) => (props.isContactPage ? '4.5rem' : '9rem')}
        var(--site-side-padding-md) 4.5rem;
    }
  }
`;

const Footer = () => {
  const router = useRouter();
  const isContactPage = router.asPath === '/contact';

  return (
    <StyledFooter isContactPage={isContactPage}>
      {!isContactPage && <GetInTouchCard />}
      <div className='dark-bg flex-col flex-centered'>
        <Nav isFooter={true} />
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
