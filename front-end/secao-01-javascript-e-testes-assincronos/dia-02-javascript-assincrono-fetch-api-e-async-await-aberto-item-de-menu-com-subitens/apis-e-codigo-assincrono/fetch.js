const fetch = require('node-fetch');

const fetchInspiration = async () => {
  const url = 'https://api.goprogram.ai/inspiration';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => `"${data.quote}" | ${data.author}`)
    .catch((error) => `Algo deu errado - ${error}`);
  
  console.log(result);
};

fetchInspiration();


const fetchInspirationError = () => {
  const url2 = 'api.goprogram.ai/inspiration';

  fetch(url2)
    .then((response) => response.json())
    .then((data) => console.log(`"${data.quote}" | ${data.author}`))
    .catch((error) => console.log(`Algo deu errado - ${error}`));
}

fetchInspirationError();

const fetchInspirationTryAndCatch = async () => {
  const url = 'https://api.goprogram.ai/inspiration';

  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log(`"${data.quote}" | ${data.author}`);
  } catch (error) {
    console.log(`Algo deu errado - ${error}`);
  }
}

fetchInspirationTryAndCatch();
