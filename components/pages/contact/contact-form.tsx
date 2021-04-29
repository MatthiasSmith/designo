import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DESKTOP_BP, TABLET_BP } from '../../../constants/constants';

import Button from '../../button';
import FormField from '../../form-field';

const StyledContactForm = styled.form`
  align-items: center;

  .submit-btn {
    margin-top: 1.5rem;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    .submit-btn {
      align-self: flex-end;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    flex: 0 0 23.75rem;
  }
`;

const ContactForm = () => {
  const fieldState = {
    value: '',
    valid: true,
    typeMismatch: false,
    errorMessage: '',
    requiredTxt: "Can't be empty",
  };
  const [name, setName] = useState({ ...fieldState, required: true });
  const [email, setEmail] = useState({
    ...fieldState,
    required: true,
    formatErrorTxt: 'Incorrect email format',
  });
  const [phone, setPhone] = useState({
    ...fieldState,
    formatErrorTxt: 'Incorrect phone format',
  });
  const [message, setMessage] = useState({ ...fieldState, required: true });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    console.log(name.value, email.value, message.value);
    if (!name.value || !email.value || !message.value) return;
    setIsFormValid(name.valid && email.valid && message.valid);
  }, [name.valid, email.valid, message.valid]);

  useEffect(() => {
    if (!isFormValid) return;
    console.log('form submitted');
  }, [isFormValid]);

  const checkAllFieldsValid = (formElements) => {
    Array.prototype.slice
      .call(formElements)
      .forEach((field) => setFieldValidity(field));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case 'name':
        setName({ ...name, value });
      case 'email':
        setEmail({ ...email, value });
      case 'phone':
        setPhone({ ...phone, value });
      case 'message':
        setMessage({ ...message, value });
    }
  };

  const handleBlur = (event) => {
    setFieldValidity(event.target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkAllFieldsValid(event.target.elements);
  };

  const setFieldValidity = (fieldElement) => {
    switch (fieldElement.name) {
      case 'name':
        setName({ ...name, valid: fieldElement.checkValidity() });
        break;
      case 'email':
        setEmail({
          ...email,
          valid: fieldElement.checkValidity(),
          typeMismatch: fieldElement.validity.typeMismatch,
        });
        break;
      case 'message':
        setMessage({ ...message, valid: fieldElement.checkValidity() });
        break;
    }
  };

  return (
    <StyledContactForm className='flex-col' onSubmit={handleSubmit} noValidate>
      <FormField
        type='text'
        label='Name'
        name='name'
        onBlur={handleBlur}
        onChange={handleChange}
        error={!name.valid && name.requiredTxt}
        required
      />
      <FormField
        type='email'
        label='Email Address'
        name='email'
        onBlur={handleBlur}
        onChange={handleChange}
        error={
          !email.valid &&
          ((email.typeMismatch && email.formatErrorTxt) || email.requiredTxt)
        }
        required
      />
      <FormField type='tel' label='Phone' name='phone' />
      <FormField
        type='textarea'
        label='Your Message'
        name='message'
        onBlur={handleBlur}
        onChange={handleChange}
        error={!message.valid && message.requiredTxt}
        required
      />
      <Button className='submit-btn' secondary={true} type='submit'>
        Submit
      </Button>
    </StyledContactForm>
  );
};

export default ContactForm;
