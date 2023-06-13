import {
  Accordion
} from '../functions/accordion';

const answersAccordions = document.querySelector('.answers__accordions');

if (answersAccordions) {
  const accordionAnswers1 = new Accordion('.accordion--1', {
    speed: 500,
    parent: answersAccordions,
    isControlEnabled: false,
  });

  const accordionAnswers2 = new Accordion('.accordion--2', {
    speed: 500,
    parent: answersAccordions,
    isControlEnabled: false,
  });

  const accordionAnswers3 = new Accordion('.accordion--3', {
    speed: 500,
    parent: answersAccordions,
    isControlEnabled: false,
  });

  const accordionAnswers4 = new Accordion('.accordion--4', {
    speed: 500,
    parent: answersAccordions,
    isControlEnabled: false,
  });

  const accordionAnswers5 = new Accordion('.accordion--5', {
    speed: 500,
    parent: answersAccordions,
    isControlEnabled: false,
  });
}
