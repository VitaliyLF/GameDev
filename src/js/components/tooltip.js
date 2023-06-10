import {
  createPopper,
  right
} from '@popperjs/core';

const btns = document.querySelectorAll('.tooltip__btn');
const tooltips = document.querySelectorAll('.tooltip__txt');

btns.forEach((btn, index) => {
  const tooltip = tooltips[index];
  createPopper(btn, tooltip, {
    placement: 'right',
  });
});
