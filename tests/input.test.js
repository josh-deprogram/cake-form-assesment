const inputEmpty = require('../public/js/validateInput');

describe('validateInput', () => {
  it('should return true', () => {
      const inputElement = { value: '' }
    expect(inputEmpty(inputElement)).toBe(true);
  });
});