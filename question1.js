function findsumOfEvenNumbers(numbers) {
  let i,
    sum = 0;

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
let sum = findsumOfEvenNumbers([
  1, 2, 4, 6, 8, 9, 10, 12, 15, 14, 16, 17, 18, 20,
]);

console.log("Sum of even numbers : " + sum);
