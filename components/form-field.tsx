import React from 'react';
import styled from 'styled-components';

const StyledFormField = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.1875rem;
    background-color: white;
    bottom: ${(props) => (props.type === 'textarea' ? '0.4375rem' : '0')};
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.15s ease-out;
  }

  &:focus-within::after {
    transform-origin: left;
    transform: scaleX(1);
    transition: transform 0.3s ease-out;
  }

  input,
  textarea {
    appearance: none;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    border-radius: 0;
    color: var(--text-color-secondary);
    font-family: var(--font-family);
    font-size: 0.9375rem;
    font-weight: var(--font-weight-medium);
    line-height: 1.625rem;
    outline: 0;
    padding: 0 1rem 0.75rem;
    width: 100%;

    &::placeholder {
      color: rgba(255, 255, 255, 1);
    }
  }

  textarea {
    height: 6.375rem;
    margin-bottom: 0;
    resize: none;
  }

  .error-container {
    position: absolute;
    top: 0.25rem;
    right: 0.5rem;
  }

  .error-msg {
    color: white;
    font-size: 0.75rem;
    font-style: italic;
    margin-right: 0.5625rem;
  }

  .error-icon {
    width: 20px;
    height: 20px;
  }
`;

interface FormFieldTextAreaTypes
  extends React.ComponentPropsWithoutRef<'textarea'> {}

interface FormFieldInputTypes extends React.ComponentPropsWithoutRef<'input'> {
  error?: string;
  label?: string;
}

type FormFieldType = FormFieldInputTypes & FormFieldTextAreaTypes;

const FormField = (props: FormFieldType) => {
  const { type, label, name, value, error, ...otherProps } = props;
  return (
    <StyledFormField error={error} type={type}>
      {type === 'textarea' ? (
        <textarea
          aria-label={label}
          name={name}
          id={name}
          value={value}
          className='focus-visible'
          placeholder={label}
          {...otherProps}
        />
      ) : (
        <input
          type={type || 'text'}
          aria-label={label}
          name={name}
          id={name}
          value={value}
          className='focus-visible'
          placeholder={label}
          {...otherProps}
        />
      )}
      {error ? (
        <div className='error-container flex-row align-center'>
          <span className='error-msg'>{error}</span>
          <img
            className='error-icon'
            src='/contact/desktop/icon-error.svg'
            width='20px'
            height='20px'
            alt=''
          />
        </div>
      ) : null}
    </StyledFormField>
  );
};

export default FormField;
