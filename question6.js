function objectkey(person) {
  let names = [];
  for (let i = 0; i < person.length; i++) {
    names.push(person[i].name);
  }
  return names;
}

let person = [
    { name: "umer", age: 22 },
    { name: "asher", age: 18 },
    { name: "hassan", age: 24 },
];
values = objectkey(person);
console.log(values);
