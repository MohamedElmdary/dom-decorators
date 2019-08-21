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
  method: string | symbol,
  key: string,
  value: TMetaResolver
) {
  method = method.toString();
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
  method: string | symbol,
  key: string | symbol
): TMetaResolver {
  key = key.toString();
  method = method.toString();
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
  return META[GLOBAL][key.toString()] ? META[GLOBAL][key.toString()] : key;
}
