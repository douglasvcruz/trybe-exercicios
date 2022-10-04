const greeting = (user) => console.log(`Welcome ${user}!`);

greeting();

const greeting1 = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting1();

const greeting2 = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting2();
