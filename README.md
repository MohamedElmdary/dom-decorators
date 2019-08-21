# dom-decorators

dom-decorators is a way of manipulate dom using es6 decorators for small project :")

```html
<!-- html -->
<button id="btn">button</button>
<ul id="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

```typescript
// ts
import {
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
    console.log({
      e, // event value
      s, // other li (not clicked one)
      t, // the clicked li
      btn // random btn from dom
    });
  }
}
```

> more info later :)
