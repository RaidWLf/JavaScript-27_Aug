const isItemUnique = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let itemToCheck = arr[i];
    for (j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if (itemToCheck === arr[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isItemUnique([2, 4, 5, 6, 7, 8, 9, 0]));
