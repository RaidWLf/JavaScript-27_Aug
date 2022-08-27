const calcBMI = (weight, height) => {
  let bmi = weight / (height * height);
  return bmi.toFixed(2);
};

let myBMI = calcBMI(64, 1.62);

if (myBMI < 18.5) {
  console.log("Underweight");
} else if (myBMI <= 24.99 && myBMI >= 18.5) {
  console.log("Normal");
} else if (myBMI >= 25.0 && myBMI <= 29.99) {
  console.log("Overweight");
} else if (myBMI >= 30) {
  console.log("Obese");
}
