function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.round((start + end) / 2);

    if (arr[middle].age === value) return arr[middle];

    if (value > arr[middle].age) {
      start = middle + 1;
    }

    if (value < arr[middle].age) {
      end = middle - 1;
    }
  }

  return -1;
}

console.log(
  binarySearch(
    [
      { name: "agor", age: 20 },
      { name: "bimul", age: 22 },
      { name: "clif", age: 30 },
      { name: "dazim", age: 40 },
      { name: "enik", age: 55 },
    ],
    55
  )
);

/* function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {

    let middle = Math.round((start + end) / 2);

    if (arr[middle] === value) return middle;

    if (value > arr[middle]) {
      start = middle + 1;
    }
    if (value < arr[middle]) {
      end = middle - 1;
    }
  }
  return -1;
}
const index = binarySearch([1, 2, 4, 7, 34, 66], 2);
console.log(index);
 */
