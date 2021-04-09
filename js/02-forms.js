/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(value);
    console.log(name);
  });
  // const formElements = event.currentTarget.elements;
  // const mail = formElements.email.value;
  // const password = formElements.password.value;
  // console.log(mail);
}
