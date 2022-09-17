function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function dias() {
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    const ul = document.querySelector('#days');
    const days = decemberDaysList[i]
    const day = document.createElement('li');
    day.innerHTML = days;

    if (days === 24 || days === 31) {
      day.className = 'day holiday'
    } else if (days === 4 || days === 11 || days === 18) {
      day.className = 'day friday'
    } else if (days === 25) {
      day.className = 'day holiday friday'
    } else {
      day.className = 'day';
    }
    ul.appendChild(day);
  }
}

dias()

function bottom(feriados) {
  const container = document.querySelector('.buttons-container');
  const bottom = document.createElement('button');
  bottom.id = 'btn-holiday';
  bottom.innerHTML = feriados;
  container.appendChild(bottom);
}

bottom('Feriados')

function mudarCor() {
  let bottom = document.querySelector('#btn-holiday');
  let holiday = document.querySelectorAll('.holiday')

  bottom.addEventListener('click', function () {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === 'white') {
        holiday[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holiday[index].style.backgroundColor = 'white';
      }
    }
  });
}

mudarCor()

function friday(name) {
  const container = document.querySelector('.buttons-container');
  const bottom = document.createElement('button');
  bottom.id = 'btn-friday';
  bottom.innerHTML = name;
  container.appendChild(bottom);
}

friday('Friday')


function fridayText(fridays) {
  const bottom = document.querySelector('#btn-friday');
  const friday = document.querySelectorAll('.friday');

  bottom.addEventListener('click', function () {
    for (let i = 0; i < friday.length; i += 1) {
      if (friday[i].innerHTML !== 'Sextou') {
        friday[i].innerHTML = 'Sextou';
      } else {
        friday[i].innerHTML = fridays[i];
      }
    }
  });
}

let decemberFridays = [4, 11, 18, 25];
fridayText(decemberFridays);

function aumentar() {
  const days = document.querySelector('#days');

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
  });
}

function diminuir() {
  const days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
  });
}

aumentar();
diminuir();

function personalizar(cozinhar) {
  const tasks = document.querySelector('.my-tasks');
  const span = document.createElement('span');
  span.innerHTML = cozinhar;
  tasks.appendChild(span);
}

personalizar('cozinhar');

function cor(azul) {
  const tasks = document.querySelector('.my-tasks');
  const div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = azul;
  tasks.appendChild(div);
}

cor('green');

function selecionar() {
  const div = document.querySelector('.task');

  div.addEventListener('click', function (event) {
    if (div.className !== 'task selected') {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

selecionar();

function corTarefa() {
  let selected = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let div = document.querySelector('.task');
  let divColor = div.style.backgroundColor;

  days.addEventListener('click', function (event) {
    let eventColor = event.target.style.color;

    if (eventColor !== divColor) {
      event.target.style.color = selected[0].style.backgroundColor;
    } else {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

corTarefa();

function compromisso() {
  const input = document.querySelector('#task-input');
  const adicionar = document.querySelector('#btn-add');
  const tasksList = document.querySelector('.task-list');

  adicionar.addEventListener('click', function() {
    if (input.value.length > 0) {
      const li = document.createElement('li');
      li.innerText = input.value;

      tasksList.appendChild(li);
      input.value = '';
    } else {
      alert('Error!');
    }
  });

  input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && input.value.length > 0) {
      const li = document.createElement('li');
      li.innerText = input.value;

      tasksList.appendChild(li);
      input.value = '';
    }
  });
}

compromisso();
