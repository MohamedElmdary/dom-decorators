/* @dom example */

import { createPrameterDecorator, createMethodDecorator } from '../src';

const Event = createPrameterDecorator(() => {
  return 0;
});

const siblings = createPrameterDecorator(() => {
  return 1;
});

const log = createMethodDecorator(() => {
  return null;
});

class App {
  @log()
  onclick(@Event() e, @siblings() s) {}
}

console.log(App.prototype);
