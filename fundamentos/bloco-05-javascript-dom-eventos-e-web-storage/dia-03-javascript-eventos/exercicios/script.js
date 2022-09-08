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

  bottom.addEventListener('click', function() {
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
