/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action= "close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscapePress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscapePress);
}

function onBackdropClick(event) {
  // где висит аддлисенер
  console.log(event.currentTarget);
  // куди жмакнули
  console.log(event.target);

  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onEscapePress(event) {
  // const ESC_KEY_CODE = 'Escape';
  // const isEscKey = ESC_KEY_CODE === event.code;

  if (event.code === 'Escape') {
    onCloseModal();
  }
}
