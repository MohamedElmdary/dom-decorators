export function getSiblings(el: Element): Array<Element> {
  if (!el) {
    throw new Error(`getSiblings require Element Reference.`);
  }
  const siblings = [];
  let current = el.previousElementSibling;
  while (current) {
    siblings.unshift(current);
    current = current.previousElementSibling;
  }
  current = el.nextElementSibling;
  while (current) {
    siblings.push(current);
    current = current.nextElementSibling;
  }
  return siblings as Array<Element>;
}
