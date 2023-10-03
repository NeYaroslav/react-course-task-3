import { recursiveFib } from "./recursiveFib.js";
import { filter } from "./filter.js";
import { pow } from "./pow.js";
import { powList } from "./powList.js";
import { powAndFilter } from "./powAndFilter.js";
import { sum } from "./sum.js";

let arr = [1, 2, 3, 4];

console.log(`%ctask №2`, "color: red");
console.log(recursiveFib(10)); //55

console.log(`%ctask №3`, "color: red");
console.log(filter(arr, (item) => item % 2)); // [1, 3]
console.log(arr); // [1, 2, 3, 4]

console.log(`%ctask №4`, "color: red");
console.log(pow(5, 2)); //25

console.log(`%ctask №5`, "color: red");
console.log(powList([1, 2, 3], 2)); // [1, 4, 9]

console.log(`%ctask №6`, "color: red");
console.log(powAndFilter([1, 2, 3], 2, 2)); // [4, 9]

console.log(`%ctask №7`, "color: red");
const calc = sum(handler);
console.log(calc()); //6

function handler() {
  return [1, 2, 3];
}
