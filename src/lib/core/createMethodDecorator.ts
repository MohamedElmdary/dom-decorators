'use strict';

function createMethodDecorator<T = any, U = any>(fn: (props: T) => U) {
  return function(props?: T): MethodDecorator {
    return function<Q = Function>(
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<Q>
    ): void | TypedPropertyDescriptor<Q> {
      const original = descriptor.value;
    };
  };
}

export { createMethodDecorator };
