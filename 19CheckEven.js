const checkIfEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
let num = 5;
let isEven = checkIfEven(num);

if (isEven) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is not even`);
}
