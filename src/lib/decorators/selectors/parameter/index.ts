import { createPrameterDecorator } from '../../../core';
import { getElement } from '../../../helper/getElement';

export const ById = createPrameterDecorator<string>(id => {
  return getElement(id, document.getElementById, 'id');
});

export const ByQuerySelector = createPrameterDecorator<string>(selector => {
  return getElement(selector, document.querySelector, 'selector');
});

export const ByQuerySelectorAll = createPrameterDecorator<string>(selector => {
  return getElement<Array<Element>>(
    selector,
    document.querySelectorAll,
    'selector'
  );
});
