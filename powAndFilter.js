import { filter } from "./filter.js";
import { powList } from "./powList.js";

export function powAndFilter(arr, power, minNumber) {
  return filter(powList(arr, power), (item) => item > minNumber);
}
