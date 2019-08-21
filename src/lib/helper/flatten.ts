export function flatten(arr: Array<any>): Array<any> {
  return [].concat.apply([], arr);
}
