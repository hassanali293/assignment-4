function getUniqueStrings(strings) {
  let uniqueStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (!uniqueStrings.includes(strings[i])) {
      uniqueStrings.push(strings[i]);
    }
  }
  return uniqueStrings;
}
let strings = ["apple", "banana", "apple", "pear", "pear", "orange"];
let uniqueStrings = getUniqueStrings(strings);
console.log(uniqueStrings);
