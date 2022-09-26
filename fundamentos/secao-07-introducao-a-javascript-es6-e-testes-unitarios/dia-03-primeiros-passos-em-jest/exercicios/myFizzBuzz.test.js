const myFizzBuzz = require('./myFizzBuzz'); //

describe('testes de myFizzBuzz', () => {
  it('verifica qual parte de myFizzBuzz retorna', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('1')).toBe(false);
  });
});