import styled from 'styled-components';
import { useRouter } from 'next/router';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';
import GetInTouchCard from './get-in-touch-card';
import Nav from '../nav';
import SocialMediaLinks from './social-media-links';
import AddressContactInfo from './address-contact-info';

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
          <AddressContactInfo />
          <SocialMediaLinks />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
