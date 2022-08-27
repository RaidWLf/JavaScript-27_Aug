sumOfEven = 0;
sumOfOdd = 0;

for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEven += i;
  } else {
    sumOfOdd += i;
  }
}

console.log(`Sum of Even =>  ${sumOfEven}
Sum of Odd  =>  ${sumOfOdd}`);
