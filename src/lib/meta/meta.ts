'use strict';

export const DOCUMENT = '__@DOCUMENT__';
export const GLOBAL = '__@GLOBAL__';

export const META: {
  [GLOBAL]: { [key: string]: any };
  [key: string]: { [key: string]: any };
} = {
  [GLOBAL]: {}
};

export function registerMeta<TMetaResolver = any>(
  key: string | symbol,
  value: TMetaResolver,
  method: string
) {
  key = key.toString();
  if (!META[method]) {
    META[method] = {};
  }
  if (META[method][key]) {
    throw new Error(`'${key}' meta is already defined on method: ${method}()`);
  }
  META[method][key] = value as TMetaResolver;
}

export function registerGlobalMeta<TMetaResolver = any>(
  key: string | symbol,
  value: TMetaResolver
) {
  key = key.toString();
  if (META[GLOBAL][key]) {
    throw new Error(`'${key}' meta is already globaly defined!`);
  }
  META[GLOBAL][key] = value as TMetaResolver;
}

export function resolveMeta<TMetaResolver = any>(
  key: string | symbol,
  method: string
): TMetaResolver {
  key = key.toString();
  if (!META[method]) {
    throw new Error(`${method}() has no defined any meta!`);
  }
  if (!META[method][key]) {
    throw new Error(`${key} meta was never registerd for ${method}()`);
  }
  return META[method][key] as TMetaResolver;
}

export function resolveGlobalMeta<TMetaResolver = any>(
  key: string | symbol
): TMetaResolver {
  key = key.toString();
  if (!META[GLOBAL][key]) {
    throw new Error(`${key} meta was never defined!`);
  }
  return META[GLOBAL][key] as TMetaResolver;
}
