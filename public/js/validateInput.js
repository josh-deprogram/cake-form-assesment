// Expose Validator so can run test
const validateInput = (input) => {
  if (input.value === '') {
    return true;
  } 
};

module.exports = validateInput;