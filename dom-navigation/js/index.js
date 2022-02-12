'use strict';

// Родитель:
// element.parentElement – родитель-элемент.
// Соседи:
// element.previousElementSibling – предыдущий сосед-элемент.
// element.nextElementSibling – lastElementChildследующий сосед-элемент.
// Дети:
// element.children – коллекция детей, которые являются элементами.
// element.firstElementChild – первый дочерний элемент.
// element.lastElementChild – последний дочерний элемент.

// closest('css')

// const ulEl = document.querySelector('ul');
// const parentUl = ulEl.parentElement;
// const pBeforeUl = ulEl.previousElementSibling;

// // 1 найти  h3 через ul
// const h3El1 = ulEl.parentElement.firstElementChild;
// // 2
// const h3El2 = ulEl.previousElementSibling.previousElementSibling;

// const ulChildren = ulEl.children;

// const targetInfo = e => {
//   console.log('e.target :>> ', e.target);
//   console.log('e.currentTarget :>> ', e.currentTarget);
// };
// for (const el of ulChildren) {
//   el.addEventListener('click', targetInfo);
// }
// ulEl.addEventListener('click', targetInfo);

// const ulClosestParentAtricle = ulEl.closest('article');
// const ulClosestParentBody = ulEl.closest('body');
// const ulClosestParentClass1 = ulEl.closest('.class1');

// // При клике на заголовок поменять цвет следующей p
// // (использовать e.target или e.currentTarget)
// // const h3Click = document.querySelector('h3');

// document.querySelector('h3').onclick = e => {
//   e.currentTarget.nextElementSibling.style.color = '#ff0000';
// };

// // При клике на любой li выделить p Lorem2
// // (использовать e.target или e.currentTarget)

// const ulChilds = document.querySelectorAll('ul li');
// ulChilds.forEach(item => {
//   item.onclick = e =>
//     (e.target.parentElement.nextElementSibling.style.color = 'green');
// });

/***** Bubbling and capturing  */

const targetInfo = e => {
  console.log('e.target :>> ', e.target);
  console.log('e.currentTarget :>> ', e.currentTarget);
  // e.stopPropagation(); // прекратить дальнейшее всплытие/погружение
};

document.body.onclick = targetInfo;
document.querySelector('article').onclick = targetInfo;
document.querySelector('ul').onclick = targetInfo;
document.querySelector('ul').firstElementChild.onclick = targetInfo;

document.body.addEventListener('click', targetInfo, { capture: true });
document.body.removeEventListener('click', targetInfo, { capture: true });
document
  .querySelector('article')
  .addEventListener('click', targetInfo, { capture: true });
document
  .querySelector('ul')
  .addEventListener('click', targetInfo, { capture: true });
document
  .querySelector('ul')
  .firstElementChild.addEventListener('click', targetInfo, { capture: true });
