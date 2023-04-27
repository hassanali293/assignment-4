function product(numbers) {
  let Product = 1,
    i;
  for (let i = 0; i < numbers.length; i++) {
    Product *= numbers[i];
  }
  console.log(" Product :  " + Product);
}
product([1, 2, 3, 4, 5]);
