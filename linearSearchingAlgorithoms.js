function binarySearch(arr, value) {
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

console.log(binarySearch([10, 20, 30, 40, 50, 60, 65], 35));

/* function linearSearch(arr, value) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return `Your search number is ${arr[i]} , index = ${i}`;
    }
  }
}

console.log(linearSearch([10, 20, 30, 40], 20)); */
