'use strict';

import { Meta, defineInitMeta } from './defineInitMeta';

function defineMeta(
  target: any,
  key: string | symbol,
  value: any,
  index: number
): void {
  const definedMeta: Meta = defineInitMeta(target);
  key = key.toString();
  if (definedMeta[key]) {
    definedMeta[key].unshift({ index, value });
    return;
  }
  definedMeta[key] = [{ index, value }];
}

export { defineMeta };
