'use strict';

import { defineMeta } from '../meta';

function createPrameterDecorator<T = any, U = any>(fn: (props: T) => U) {
  return function(props?: T): ParameterDecorator {
    return function(target: any, key: string | symbol, index: number): void {
      defineMeta(target, key, fn(props as T), index);
    };
  };
}

export { createPrameterDecorator };
