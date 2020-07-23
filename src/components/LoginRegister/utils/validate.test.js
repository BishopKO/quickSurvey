import React from 'react';
import { validateLogin, validateRegister } from './validate';

describe('Login form', () => {
  test('Validate Login - correct', () => {
    expect(validateLogin({ email: 'email@host.com', password1: '12345678' })).toBe(true);
  });

  test('Validate Login - empty', () => {
    expect(validateLogin({ email: '', password1: '' })).toStrictEqual({
      email: 'Email empty.',
      password1: 'Password empty.',
    });
  });

  test('Validate Login - wrong email', () => {
    expect(validateLogin({ email: 'email', password1: '12345678' })).toStrictEqual({
      email: 'Bad email address.',
    });
  });
});

describe('Registration form', () => {
  test('Validate Register - correct', () => {
    expect(validateRegister(({ email: 'email@host.com', password1: '12345678', password2: '12345678' })))
      .toBe(true);
  });


  test('Validate Register - bad email', () => {
    expect(validateRegister(({ email: 'email', password1: '12345678', password2: '12345678' })))
      .toStrictEqual({ email: 'Bad email address.' });
  });

  test('Validate Register - password1 too short', () => {
    expect(validateRegister(({ email: 'email@host.com', password1: '1234', password2: '12345678' })))
      .toStrictEqual({ password1: 'Password too short, 8 characters minimum.' });
  });
});


