export * from './eventListener';
import { createPrameterDecorator } from '../../../core';
import { getElement } from '../../../helper/getElement';

export const ByIdP = createPrameterDecorator<string>(id => {
  return getElement(id, document.getElementById, 'id');
});

export const ByQuerySelectorP = createPrameterDecorator<string>(selector => {
  return getElement(selector, document.querySelector, 'selector');
});

export const ByQuerySelectorAllP = createPrameterDecorator<string>(selector => {
  return getElement<Array<Element>>(
    selector,
    document.querySelectorAll,
    'selector'
  );
});
