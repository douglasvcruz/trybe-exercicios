const enviar = document.querySelector('#submit');
const limpar = document.querySelector('#clear');
const concordo = document.querySelector('#concordo');

function validando() {
  const email = document.querySelector('#email').value.length;
  const emailInvalido = email < 10 || email > 50;

  const name = document.querySelector('#name').value.length;
  const nomeInvalido = name < 10 || name > 40;

  const motivo = document.querySelector('#motivo').value.length;
  const motivoInvalido = motivo > 500;

  if (emailInvalido || nomeInvalido || motivoInvalido) {
    return false;
  } else {
    return true;
  }
}

window.onload = function () {
  enviar.addEventListener('click', (e) => {
    e.preventDefault();
    if (validando() === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }  
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
  concordo.addEventListener('change', () => {
    enviar.disabled = !concordo.checked;
  });
};
