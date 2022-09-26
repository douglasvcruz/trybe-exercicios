const sum = require('./sum.js');

describe('testes de sum', () => {
  it('A soma de dois valores', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  it('Erro na soma de dois valores', () => {
    expect(() => sum(4, "5")).toThrowError();
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
  });
});