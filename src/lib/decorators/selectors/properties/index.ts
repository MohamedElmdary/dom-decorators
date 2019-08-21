import { createPropertyDecorator } from '../../../core';
import { getElement } from '../../../helper/getElement';

export const ById = createPropertyDecorator<string>(id => {
  return getElement(id, document.getElementById, 'id');
});

export const ByQuerySelector = createPropertyDecorator<string>(selector => {
  return getElement(selector, document.querySelector, 'selector');
});

export const ByQuerySelectorAll = createPropertyDecorator<string>(selector => {
  return getElement<Array<Element>>(
    selector,
    document.querySelectorAll,
    'selector'
  );
});
