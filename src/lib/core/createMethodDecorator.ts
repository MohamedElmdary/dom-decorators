'use strict';

import { getMeta, Argument } from '../meta';

function createMethodDecorator<T = any, U = any>(
  fn: (original: Function, meta: Argument[], props: T) => U
) {
  return function(props?: T): MethodDecorator {
    return function<Q = Function>(
      target: any,
      key: string | symbol,
      descriptor: TypedPropertyDescriptor<Q>
    ): void | TypedPropertyDescriptor<Q> {
      const original = target[key];
      const meta = getMeta(target, key);
      fn(original, meta, props as T);
    };
  };
}

export { createMethodDecorator };
