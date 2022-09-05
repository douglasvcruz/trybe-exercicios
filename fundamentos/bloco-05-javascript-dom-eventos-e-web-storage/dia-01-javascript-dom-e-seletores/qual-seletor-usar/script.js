const cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = 'rgb(0, 176, 105)';

const tasks = document.getElementsByClassName('emergency-tasks')[0];
tasks.style.backgroundColor = 'rgb(255, 159, 132)';

const no_tasks = document.getElementsByClassName('no-emergency-tasks')[0];
no_tasks.style.backgroundColor = 'rgb(249, 219, 94)';

const tasks_h3 = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < tasks_h3.length; i += 1) {
  tasks_h3[i].style.backgroundColor = 'rgb(165, 0, 243)';
}

const no_tasks_h3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < no_tasks_h3.length; i += 1) {
  no_tasks_h3[i].style.backgroundColor = 'rgb(35, 37, 37)';
}

const rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'rgb(0, 53, 51)';
