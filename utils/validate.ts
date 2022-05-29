import _isEmpty from 'lodash/isEmpty';

export const validateEmail = (value = '') => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );
};

export const validateEmptyObjectKeys = (
  obj: Record<string, any>,
  errorMessage: string | boolean = true,
  ignore = []
) => {
  const errors = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (
      !ignore.includes(key) &&
      (!value || (key === 'email' && !validateEmail(value)))
    ) {
      errors[key] = errorMessage;
    }
  });
  return {
    errors,
    isValid: _isEmpty(errors),
  };
};
