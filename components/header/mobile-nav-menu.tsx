import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledOverlay = styled.div`
  background: rgba(0, 0, 0, 0.55);
  position: fixed;
  top: 6rem;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const StyledMobileNaveMenuContainer = styled.div`
  background: var(--black);
  color: white;
  padding: 3rem var(--site-side-padding);
  position: absolute;
  width: 100%;
  top: 6rem;
  left: 0;
  z-index: 11;

  li:not(:first-of-type) {
    margin-top: 2rem;
  }

  .nav-link {
    font-size: 1.5rem;
    letter-spacing: 2px;
    line-height: 1.5625rem;
    text-transform: uppercase;
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
      <>
        <StyledOverlay onClick={handleOverlayClick} />
        <StyledMobileNaveMenuContainer
          role='dialog'
          aria-label='Mobile navigation menu.'
          onKeyUp={closeOnEscapeKey}
          ref={ref}
          tabIndex={-1}
        >
          <ul>
            <li>
              <Link href='/our-company'>
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
      </>
    );
  }
);

export default MobileNavMenu;
