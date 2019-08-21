'use strict';

function createPrameterDecorator<T = any, U = any>(fn: (props: T) => U) {
  return function(props?: T): ParameterDecorator {
    return function(target: any, key: string | symbol, index: number): void {};
  };
}

export { createPrameterDecorator };
