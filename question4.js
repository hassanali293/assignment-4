function findaverage(Array) {
  let sum = 0;
  for (let i = 0; i < Array.length; i++) {
    sum += Array[i];
  }
  return sum / Array.length;
}
const number = [1, 2, 3, 4, 5];
const average = findaverage(number);
console.log(average);
