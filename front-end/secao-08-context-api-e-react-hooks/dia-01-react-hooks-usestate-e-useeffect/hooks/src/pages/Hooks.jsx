import React, { useState } from 'react';

function Hooks() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState();

  return (
    <form>
        <label htmlFor="name">
          Nome completo
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <br />
        <label htmlFor="age">
          Idade
          <input
            type="number"
            value={age}
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <br />
        <label htmlFor="city">
          Cidade/UF
          <input
            type="text"
            value={location}
            onChange={({ target }) => setLocation(target.value)}
          />
        </label>
        <br />
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            name="module"
            value="Front-end"
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            name="module"
            value="Ciência da computação"
            checked={module === 'Ciência da computação'}
            onChange={({ target }) => setModule(target.value)}
          />
          <button type="submit" onClick={(event) => {event.preventDefault()}}>Teste</button>
        </label>
    </form>
  );
}

export default Hooks;