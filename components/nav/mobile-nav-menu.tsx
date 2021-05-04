import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledOverlay = styled.div`
  animation: fade-in 0.26s ease-out 0s forwards;
  background: rgba(0, 0, 0, 0.55);
  opacity: 0;
  position: fixed;
  top: 6rem;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const StyledMobileNaveMenuContainer = styled.div`
  animation: slide-open 0.26s ease-out 0s forwards;
  background: var(--black);
  color: white;
  max-height: 0rem;
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 6rem;
  left: 0;
  z-index: 11;

  ul {
    padding: 3rem var(--site-side-padding);
  }

  li:not(:first-of-type) {
    margin-top: 2rem;
  }

  .nav-link {
    font-size: 1.5rem;
    letter-spacing: 2px;
    line-height: 1.5625rem;
    text-transform: uppercase;
  }

  @keyframes fade-in-mobile-nav {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes slide-open {
    0% {
      max-height: 0rem;
    }

    100% {
      max-height: 15.0625rem;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    animation: fade-in-mobile-nav 0.26s ease-out 0s forwards;
    opacity: 0;
    max-height: unset;
  }
`;

const MobileNavMenu = React.forwardRef<HTMLDivElement, { onClose: Function }>(
  ({ onClose }: { onClose: Function }, ref) => {
    const handleOverlayClick = () => {
      onClose();
    };

    const closeOnEscapeKey = (event) => {
      event.stopPropagation();

      if (event.key === 'Escape') {
        onClose();
      }
    };

    return (
      <div ref={ref}>
        <StyledOverlay
          className='mobile-nav-overlay'
          onClick={handleOverlayClick}
        />
        <StyledMobileNaveMenuContainer
          className='mobile-nav-menu'
          role='dialog'
          aria-label='Mobile navigation menu.'
          onKeyUp={closeOnEscapeKey}
          tabIndex={-1}
        >
          <ul>
            <li>
              <Link href='/about'>
                <a className='nav-link'>Our Company</a>
              </Link>
            </li>
            <li>
              <Link href='/locations'>
                <a className='nav-link'>Locations</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul>
        </StyledMobileNaveMenuContainer>
      </div>
    );
  }
);

export default MobileNavMenu;
