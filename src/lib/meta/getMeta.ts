'use strict';

import { Meta, defineInitMeta, Argument } from './defineInitMeta';

function getMeta(target: any, key: string | symbol): Array<Argument> {
  const definedMeta: Meta = defineInitMeta(target);
  return definedMeta[key.toString()] || [];
}

export { getMeta };
