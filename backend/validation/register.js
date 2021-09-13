const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.cpf = !isEmpty(data.cpf) ? data.cpf : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.designation = !isEmpty(data.designation) ? data.designation : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

  if(!Validator.isLength(data.name, { min: 2, max: 64 })) {
    errors.name = 'Name must be between 2 to 64 chars.';
  }

  if(!Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required.';
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid.';
  }

  if(!Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required.';
  }

  if(!Validator.isEmpty(data.cpf)) {
    errors.cpf = 'CPF field is required and must be a postive number.';
  }

  if(!Validator.isLength(data.designation, { min: 2, max: 64 })) {
    errors.designation = 'Designation must be between 2 to 64 chars.';
  }

  if(!Validator.isEmpty(data.designation)) {
    errors.designation = 'Designation field is required.';
  }

  if(!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must have 6 chars';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
    errors.password_confirm = 'Password must have 6 chars';
  }

  if(!Validator.equals(data.password, data.password_confirm)) {
    errors.password_confirm = 'Password and Confirm Password must match';
  }

  if(Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}