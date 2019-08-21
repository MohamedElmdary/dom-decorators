export function getElement<T = Element>(
  selector: string,
  method: (selector: string) => any,
  key: string,
  toArr: boolean = false
): T {
  method = method.bind(document);
  if (typeof selector !== 'string') {
    throw new Error(`'${selector}' is not assign to ${key}<string>.`);
  }
  const el = method(selector);
  if (!el) {
    throw new Error(`No Element with ${key}: '${selector}' was found.`);
  }
  if (toArr) {
    // @ts-ignore
    return Array.from(el) as T;
  }
  return el as T;
}
