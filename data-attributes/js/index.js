'use strict';

// const btns = document.querySelectorAll('button');

// for (const btn of btns) {
//   btn.onclick = e => {
//     console.log('host :>> ', e.target.dataset.host);
//     console.log('firstName in 1 :>> ', e.target.dataset.firstName);
//     console.log('firstName in 2 :>> ', e.target.dataset.firstname);
//   };
// }

// Создать div с 5 кнопками.(<div><button></button>*5</div>)
// Менять цвет дива в зависимости от того, на какую кнопку нажали

const changeColorBtns = document.querySelectorAll('button');

for (const btn of changeColorBtns) {
  btn.onclick = btnClickHandler;
}

function btnClickHandler(e) {
  e.currentTarget.parentElement.style.backgroundColor = `${e.currentTarget.dataset.color}`;
}
