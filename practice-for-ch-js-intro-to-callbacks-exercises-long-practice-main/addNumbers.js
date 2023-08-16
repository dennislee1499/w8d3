// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft > 0) {
//     rl.question("Select A Number", (num) => {
//       sum += parseInt(num);
//       console.log(`You selected: ${num}`);
//       console.log(`Current Sum: ${sum}`);
//       addNumbers(sum, numsLeft - 1, completionCallback);
//     });
//   } else {
//     completionCallback(sum);
//   }
// }

// rl.question("Select A Number", (num) => {
//   console.log(`You selected: ${num}`);
//   addNumbers(parseInt(num), 2, (sum) => {
//     console.log(`Total Sum: ${sum}`);
//     rl.close();
//   });
//   rl.close;
// });

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
    rl.close();
  }
  if (numsLeft > 0) {
    rl.question("Pick a number?", (num) => {
      sum += parseInt(num);
      completionCallback(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
      // rl.close();
    });
  }
  return sum;
}
// addNumbers(0, 3, (sum) => console.log(`Total Sum: ${sum}`));

rl.question("Select A Number", num => {
  addNumbers(0, num, (sum) => console.log(`Total Sum: ${sum}`));
  // rl.close();
})
