const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = elementoOndeVoceEsta.parentElement
pai.style.color = 'blue';

const texto = document.getElementById('primeiroFilhoDoFilho');
texto.innerHTML = 'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum'

const filhoPai = pai.firstElementChild
