/* @dom example */

import {
  ById,
  EventListener,
  Siblings,
  Target,
  Event,
  ByQuerySelectorAll,
  ByIdP
} from '../src';

class App {
  @ByQuerySelectorAll('#list > li') list;

  @EventListener({
    events: 'click',
    elements: 'list'
  })
  addListeners(@Event() e, @Siblings() s, @Target() t, @ByIdP('btn') btn) {
    console.log({ e, s, t, btn });
  }
}

// console.log(App.prototype);
