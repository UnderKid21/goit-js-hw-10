'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(event.currentTarget.elements.delay.value);
  const state = event.currentTarget.elements.state.value;

  makePromise(state, delay)
    .then(res =>
      iziToast.success({
        position: 'topRight',
        message: `✅ Fulfilled promise in ${res.delay}ms`
      })
    )
    .catch(error =>
      iziToast.error({
        position: 'topRight',
        message: `❌ Rejected promise in ${error.delay}ms`,
      })
    );
    event.currentTarget.reset();
});

const makePromise = (state, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve({delay});
      } else {
        reject({delay});
      }
    }, delay);
  });
};