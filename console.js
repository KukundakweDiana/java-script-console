const readline = require("readline");
const calculateage = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
calculateage.question("enter your year of birth", answer => {
  const age = 2019 - answer;
  if (age < 18) {
    User = "You are a Minor";
  } else if (age >= 18 && age <= 36) {
    User = "You are a Youth";
  } else if (age > 36) {
    User = " You are an Elder";
  }
  console.log(User);
  calculateage.close();
});
