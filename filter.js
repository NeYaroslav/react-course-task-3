export function filter(arr, cb) {
  let resultArr = [];

  for (let item of arr) {
    if (!cb(item)) continue;
    resultArr.push(item);
  }

  return resultArr;
}
