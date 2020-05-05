const form = document.querySelector('#user-form');
const username = document.querySelector('#username');
const submit = document.querySelector('#submit');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

form.addEventListener('submit', (e) => {
  // console.log('Hello');
  if (username.value == '') {
    modal.style.display = 'block';
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
      return;
    });
  } else {
    window.location.href = 'game.html';
    localStorage.setItem('username', username.value);
  }

  e.preventDefault();
});
