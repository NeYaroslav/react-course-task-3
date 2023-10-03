export function sum(arr) {
  return () => arr().reduce((container, item) => container + item, 0);
}
