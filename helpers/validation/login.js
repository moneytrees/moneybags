const Validator = require("validator");
const isEmpty = require(__basedir + "helpers/general/is-empty");

// Var data is an obj of stuff to validate
module.exports = function validateLoginInput(data) {

  // Set errors to empty object
  // If everything goes right, should remain empty to end
  let errors = {};

  // Check if the field is empty - if it is, set the default value to an empty string (so Validator can use it)
  // Otherwise, take input
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // Return object with any errors, check if there arent any errors
  // If errors object isempty - user input is valid
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
