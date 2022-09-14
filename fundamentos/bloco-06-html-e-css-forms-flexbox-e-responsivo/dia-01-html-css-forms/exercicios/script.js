const enviar = document.querySelector('#submit');
const limpar = document.querySelector('#clear');


window.onload = function () {
  enviar.addEventListener('click', (e) => {
    e.preventDefault();
  });
  limpar.addEventListener('click', () => {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  });
};
