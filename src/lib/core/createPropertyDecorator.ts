'use strict';

function createPropertyDecorator<T = any, U = any>(fn: (props: T) => U) {
  return function(props?: T): PropertyDecorator {
    return function(target: any, key: string | symbol): void {
      Object.defineProperty(target, key, {
        configurable: false,
        enumerable: true,
        writable: false,
        value: fn(props as T) as U
      });
    };
  };
}

export { createPropertyDecorator };
