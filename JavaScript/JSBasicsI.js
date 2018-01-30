// Assignment: JavaScript Basics I
// Complete the following challenges using JavaScript. After each challenge, comment out the code you wrote and move onto the next challenge. Submit your answers in an HTML document.
//
// Basic 1
// • Create a variable x as an empty array []. Log this array to your console.
//
// • Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.
//
// • Use .pop() to remove the final element of your array.
//
// • Log the final value of x, what is it?
//
var x = [];
x.push('coding');
x.push('dojo');
x.push('rocks');
x.pop();

console.log(x);

// Basic 2
// • Create a const called y, and store an empty array there. Log this to your console.
//
// • Use .push() to add the number 88 to array y.
//
// • What happened?
//

const y = [];
y.push(88);
console.log(y);
// I was able to but cannot change it

console.log(y[0])
y[0] = 80
console.log(y);


// Basic 3
// • Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].
//
// • Print every element to the console.
//
// • Now print every element except the final number.
//

var z = [9, 10, 6, 5, -1, 20, 13, 2];

for(i = 0; i<z.length-1;i++){
  console.log(z[i]);
}
// Basic 4
// • Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
//
// • Print the length of all names to the console.
//
// • Now modify your code so only names with a length of 5 print.
//

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']

for(i=0;i<names.length;i++){
  if(names[i].length === 5){
    console.log(names[i]);
  }

}
// Basic 5
// • Create a function yell that takes one parameter called string.
//
// • Make yell return that string in all uppercase.
//
// • Where could you look to find out more about uppercasing strings in JavaScript?
function yell(yell) {
    var yell = yell;
  return yell.toUpperCase();
}

console.log(yell("Carlos"));
