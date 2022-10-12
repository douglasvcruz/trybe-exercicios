const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // C
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // B

const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  console.log('Returned planet: ', mars);
};

setTimeout(() => getPlanet(), 4000);

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  temperaturaAtual = getMarsTemperature();
  setTimeout(() => console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`), messageDelay());
}

sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) => console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) => console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperatures = (success, error) => {
  const temperaturaAtual = getMarsTemperature();
  const message = Math.random() <= 0.6;
  setTimeout(() => {
    if(message) {
      return success(temperaturaAtual);
    } 
    return error('Robot is busy')
  }, messageDelay());
}

sendMarsTemperatures(temperatureInFahrenheit, handleError); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo
sendMarsTemperatures(greet, handleError); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('test', (console.log));

// it('uppercase "test" é igual a "TEST"'), (done) => {
//   uppercase('TEST', (result) => {
//     try {
//     expect(result).toBe('TEST');
//     done();
//     } catch (error) {
//       done(error);
//     }
//   });
// }

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) {
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const handlePokemonSearch = (error, message) => {
  if (error) {
    return console.log(error);
  } else {
    console.log(message);
  }
};

getPokemonDetails('Squirtle', handlePokemonSearch);
getPokemonDetails('Squirtles', handlePokemonSearch);

module.exports = { getPokemonDetails };