import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  background: ${(props) =>
    props.primary && !props.isIcon ? 'var(--color-primary)' : 'white'};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => !props.isIcon && 'var(--color-secondary)'};
  }
`;

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  primary?: boolean;
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
