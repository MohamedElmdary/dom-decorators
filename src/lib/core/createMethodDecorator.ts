'use strict';

import { getMeta, Argument, registerMeta } from '../meta';

function createMethodDecorator<T = any, U = any>(
  fn: (original: Function, meta: Argument[], props: T) => U,
  metaToDefine: { [key: string]: any } = {}
) {
  return function(props?: T): MethodDecorator {
    return function<Q = Function>(
      target: any,
      key: string | symbol,
      descriptor: TypedPropertyDescriptor<Q>
    ): void | TypedPropertyDescriptor<Q> {
      const original = target[key];
      const meta = getMeta(target, key);
      for (const m in metaToDefine) {
        registerMeta(key, m, metaToDefine[m]);
      }
      fn(original, meta, props as T);
    };
  };
}

export { createMethodDecorator };
