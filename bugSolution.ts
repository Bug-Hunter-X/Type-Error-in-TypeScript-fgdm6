function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user.join(" "))); // Solution 1

function greeter2(person: string[]):string {
    return person.reduce((acc,curr)=> acc + curr);
}
console.log(greeter2(user)); // Solution 2 