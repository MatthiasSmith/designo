import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledButtonLink = styled.a`
  background: ${(props) => (props.primary ? 'var(--color-primary)' : 'white')};
  border: none;
  border-radius: 0.5rem;
  color: var(--dark-gray);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  font-size: 0.9375rem;
  font-family: var(--font-family);
  letter-spacing: 1px;
  padding: 1.0625rem 1.1875rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-out;

  &:hover {
    color: white;
    background: var(--color-secondary);
  }
`;

const ButtonLink = ({
  href,
  primary,
  children,
  className,
}: {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link href={href} passHref>
      <StyledButtonLink primary={primary} className={className || ''}>
        {children}
      </StyledButtonLink>
    </Link>
  );
};

export default ButtonLink;
