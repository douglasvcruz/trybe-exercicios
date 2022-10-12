// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./script');
describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :('); // 1. Criamos o erro esperado

    getPokemonDetails('Pikachu', (error, _message) => { // 2, 3. Chamamos a função passando os parâmetros
      try { // 4. Adiciona um `try/catch`
        expect(error).toEqual(expectedError); // 5. Criamos o expect
        done(); // 6. Chamamos a função `done()`
      } catch (error) {
        done(error); // 7. Chamamos a função `done()` com o parâmetro `error`
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => { // 8. Os mesmos processos do primeira `it` com seus ajustes

    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas';

    getPokemonDetails('Charmander', (_error, result) => {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

1 - beforeEach // antes de cada teste
1 - test // o teste
1 - afterEach // depois de cada teste
1 - beforeEach // antes de cada teste
2 - beforeEach // antes de cada teste dentro do describe
2 - test // o teste dentro do describe
2 - afterEach // depois de cada teste dentro do describe
1 - afterEach // depois de cada teste