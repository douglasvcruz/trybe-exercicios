// App.test.js
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// afterEach(() => jest.clearAllMocks());

// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toHaveBeenCalledTimes(1);
//   expect(global.fetch).toHaveBeenCalledWith(
//     'https://icanhazdadjoke.com/',
//     { headers: { Accept: 'application/json' } },
//   );
// });

// App.test.js
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// afterEach(() => jest.clearAllMocks());

// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   // Outra forma de mock do fetch:
//   global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve(joke),
//   }));

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toHaveBeenCalledTimes(1);
//   expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const jokeNew = {
    id: '8h3oTtvOfxc',
    joke: 'Whiteboards remarkable.',
    status: 200,
  };

  // Outra forma de mock do fetch:
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const button = screen.getByRole('button', {
    name: /new joke/i
  })
  expect(await screen.findByText(joke.joke)).toBeInTheDocument();
  expect(screen.queryByText(jokeNew.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(jokeNew),
  });
  userEvent.click(button);

  expect(await screen.findByText(jokeNew.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});