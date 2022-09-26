const { encode, decode } = require('./encodeDecode.js');

describe('testes de encodeDecode', () => {
  it('testa se é função', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  it('encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual("12345");
  });

  it('decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it('demais letras', () => {
    expect(encode('abcdefhijklmnopqrstuvwxyz')).toEqual('1bcd2fh3jklmn4pqrst5vwxyz');
    expect(decode('1bcd2fh3jklmn4pqrst5vwxyz')).toEqual('abcdefhijklmnopqrstuvwxyz');
  });

  it('numero de caracteres', () => {
    expect(decode('12345').length).toEqual(5);
    expect(encode('12345').length).toEqual(5);
  });
});