'use strict';
// document.createElement('elementType') - создать элемент типа elementType
// Добавление дочернего:
// element.append(newEl) – перед
// element.prepend(newEl) – после
// Добавление соседа:
// element.before(newEl) – перед первым
// element.after(newEl) – после первого
// element.remove() – удаление себя

// const rootDivEl = document.querySelector('#root');

// const newEl = document.createElement('article');
// newEl.textContent = 'I am in article';
// rootDivEl.append(newEl);

// const newP = document.createElement('p');
// newEl.before(newP);

// Встроить в div#root указанную в index.html структуру

const rootDivEl = document.querySelector('#root');

const newEl = document.createElement('section');
rootDivEl.append(newEl);

const newh2 = document.createElement('h2');
newh2.textContent = 'Lorem';
// newEl.append(newh2);

const newar = document.createElement('article');
newEl.append(newh2, newar);

const newh3 = document.createElement('h3');
newh3.textContent = 'ispum';
// newar.append(newh3);

const newPl = document.createElement('p');
newPl.textContent =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapientebeatae alias voluptate? Sunt facere neque iste consequatur eaque atimpedit molestiae consequuntur nisi repellendus repellat, vel quidem voluptatem nobis ipsa.';
newar.append(newh3, newPl);

newPl.onclick = e => {
  e.currentTarget.remove();
};
