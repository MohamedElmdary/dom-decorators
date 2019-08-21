'use strict';
import { DOCUMENT } from './meta';

interface Argument {
  value: any;
  index: number;
}

interface Meta {
  [key: string]: Array<Argument>;
}

function defineInitMeta(target: any): Meta {
  if (!target[DOCUMENT]) {
    target[DOCUMENT] = {} as Meta;
  }
  return target[DOCUMENT] as Meta;
}

export { defineInitMeta, Argument, Meta };
