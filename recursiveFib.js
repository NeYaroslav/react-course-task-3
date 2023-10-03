export function recursiveFib(n) {
  if (typeof n !== "number") return;
  if (n < 1) return 0;
  if (n === 1) return 1;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}
