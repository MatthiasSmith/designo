import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  background: ${(props) => (props.primary ? 'var(--color-primary)' : 'white')};
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => (props.primary ? 'white' : 'var(--dark-gray)')};
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  font-size: 0.9375rem;
  font-family: var(--font-family);
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease-out;

  ${(props) =>
    !props.isIcon &&
    css`
      min-width: 9.5rem;
      padding: 1.0315rem 1rem;

      &:hover,
      &:focus {
        background: var(--light-peach);
        color: white;
      }
    `}
`;

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  primary?: boolean;
  secondary?: boolean;
  isIcon?: boolean;
}

const Button = (props: ButtonProps) => {
  const { type, ...otherProps } = props;

  return (
    <StyledButton type={type || 'button'} {...otherProps}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
