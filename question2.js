function countVowels(String) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < String.length; i++) {
    for (let a = 0; a < vowels.length; a++) {
      if (String[i] == vowels[a]) {
        count++;
      }
    }
  }
  return count;
}
console.log("The number of vowels are : " + countVowels("hafiz naeem ur rehman"));
