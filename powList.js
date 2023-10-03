import { pow } from "./pow.js";

export function powList(arr, power) {
  return arr.map((item) => pow(item, power));
}
