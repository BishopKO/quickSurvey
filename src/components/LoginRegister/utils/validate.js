export const validateLogin = (form) => {
  const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errorFields = {};

  if (form.email.length === 0) {
    errorFields['email'] = 'Email empty';
  } else if (reEmail.test(form.email) === false) {
    errorFields['email'] = 'Bad email address';
  }
  if (form.password1.length === 0) {
    errorFields['password1'] = 'Password empty';
  }
  return Object.keys(errorFields).length > 0 ? errorFields : true;
};

export const validateRegister = (form) => {
  const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errorFields = {};

  if (form.email.length === 0) {
    errorFields['email'] = 'Email empty';
  } else if (reEmail.test(form.email) === false) {
    errorFields['email'] = 'Bad email address';
  }
  if (form.password1.length < 8) {
    errorFields['password1'] = 'Password too short, 8 characters minimum.';
  } else if (form.password1 !== form.password2) {
    errorFields['password2'] = 'Does not match password.';
  }
  return Object.keys(errorFields).length > 0 ? errorFields : true;
};

