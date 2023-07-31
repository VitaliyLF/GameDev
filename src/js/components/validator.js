import {
  validateForms
} from '../functions/validate-forms';

const rules1 = [{
    ruleSelector: '.input-name',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните имя!'
    }]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }]
  },
  {
    ruleSelector: '.input-check',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Поставьте галочку!'
    }]
  }
];

const rules2 = [{
    ruleSelector: '.input-name',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните имя!'
    }]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }]
  },
  {
    ruleSelector: '.input-check',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Поставьте галочку!'
    }]
  }
];

const rules3 = [{
    ruleSelector: '.input-name',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните имя!'
    }]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }]
  }
];




const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.steps__apply', rules1, afterForm);
validateForms('.stage__apply', rules2, afterForm);
validateForms('.site-modal__apply', rules3, afterForm);
