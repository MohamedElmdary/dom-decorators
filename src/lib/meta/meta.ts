'use strict';

export const DOCUMENT = '__@DOCUMENT__';

export const META: { [key: string]: any } = {};

export function registerMeta<TMetaResolver = any>(
  key: string | symbol,
  value: TMetaResolver
) {
  key = key.toString();
  if (META[key]) {
    throw new Error(`'${key}' meta is already defined!`);
  }
  META[key] = value as TMetaResolver;
}

export function resolveMeta<TMetaResolver = any>(
  key: string | symbol
): TMetaResolver {
  key = key.toString();
  if (!META[key]) {
    throw new Error(`${key} meta was never registerd!`);
  }
  return META[key] as TMetaResolver;
}
