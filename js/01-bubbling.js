/*
 * Всплытие событий
 * event.target - целевой (исходный) элемент
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие
 */

const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(event) {
  console.log('onParentClick');
  console.log('Target', event.target);
  console.log('CurrentTarget', event.currentTarget);
}

function onChildClick(event) {
  console.log('onChildClick');
  console.log('Target', event.target);
  console.log('CurrentTarget', event.currentTarget);
}

function onInnerChildClick(event) {
  console.log('onInnerChildClick');
  console.log('Target', event.target);
  console.log('CurrentTarget', event.currentTarget);
}
