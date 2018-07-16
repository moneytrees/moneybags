const Validator = require("validator");
console.log(__basedir);
const isEmpty = require(__basedir+ "helpers/general/is-empty");

// Var data is an obj of stuff to validate
module.exports = function validateRegisterInput(data) {
  // Set errors to empty object
  // If everything goes right, should remain empty to end
  let errors = {};

  // Check if the field is empty - if it is, set the default value to an empty string (so Validator can use it)
  // Otherwise, take input
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // If name is empty throw error
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // If the name is not between 5 - 60 characters throw error
  if (!Validator.isLength(data.name, { min: 4, max: 60 })) {
    errors.name = "Name must be between 5 and 60 characters";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  // If email is not valid throw error
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
    
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 8, max: 40 })) {
    errors.password = "Password must be between 8 and 40 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "You must confirm your password";
  }
  // If passwords are not equal throw error
  if (!Validator.equals(data.password, data.password2)) {
    errors.password = "Your passwords must match";
  }  
  // Return object with any errors, check if there arent any errors
  // If errors object _.isempty - user input is valid
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
