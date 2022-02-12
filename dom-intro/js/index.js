'use strict';

/***** Получить объект элемента ****************************************/

const bodyElement = document.body;
console.dir(bodyElement);

// document.getElementById('idSring')
// document.getElementsByTagName('p');
// document.getElementsByClassName('my-class');
// document.getElementsByName('first-name');

// document.querySelector('#idString')
// document.querySelectorAll('p.my-class')

const pElement = document.getElementById('first-p');
const myClassElements = document.getElementsByClassName('my-class');
const [firstP, secondP] = document.getElementsByClassName('my-class');
const pElements = document.getElementsByTagName('p');

const h2El = document.querySelector('h2');
const pMyClassEls = document.querySelectorAll('p.my-class');

/***** события ***********************************************************/

const clickMeBtn = document.querySelector('.click-me-btn');

// обработчик  события -- функция, которая принимает объект события

// вешаем обработчик через свойство (недостаток - можно повесить только 1)
clickMeBtn.onclick = e => {
  alert('Click me again!');
};

const clickHandler = e => {
  console.log('e :>> ', e);
};

// вешаем обработчик через метод (позволяет вешать много обработчиков)
clickMeBtn.addEventListener('click', clickHandler);

clickMeBtn.removeEventListener('click', clickHandler);

/***** атрибуты *************************************************/

// 1
const pEl = document.querySelector('#first-p');
console.dir(pEl);

pEl.title = 'I am p';
pEl.style.color = 'red'; // font-size
pEl.style.fontSize = '24px';
pEl.style.backgroundColor = 'blue';
// pEl.hidden = true;
// pEl.style = { fontWeight: 'bold' };

// 2
// используем только строки
const pEl2 = document.querySelectorAll('.my-class')[1];
pEl2.setAttribute('title', 'I am 2 p');
// pEl2.setAttribute('hidden', 'hidden');
console.log('pEl2.getAttribute("title") :>> ', pEl2.getAttribute('title'));

// добавить абзац
// при наведении на него изменить цвет фона и размер шрифта
const pHover = document.querySelector('.mouseover');

pHover.addEventListener('mouseover', function () {
  // this.style.fontSize = '50px';
  // this.style.fontWeight = 'extra-bold';
});
pHover.addEventListener('mouseleave', function () {
  // this.style.fontSize = '14px';
});

/***** классы ************************************************/

// доступ к атирбуту class через св-во className
console.log('pHover.className :>> ', pHover.className); // 'class1 class2'

pHover.classList.add('green-text');

pHover.onclick = () => {
  // pHover.classList.remove('green-text');
  pHover.classList.toggle('green-text');
  console.log('green-text', pHover.classList.contains('green-text'));
  console.log('mouseover :>> ', pHover.classList.contains('mouseover'));
};
//
/**************************************************************** */
// изменять элементы / обавлять / удалять / осуществлять навигацию
