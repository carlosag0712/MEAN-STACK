// Assignment: JavaScript Intermediate
// Complete the following challenges. All of your code should be in one HTML file that is well commented to indicate what each block of code is doing and which problem you are solving. Don't forget to test your code as you go!
//
// Part I
// Create a function called starString() that takes a number and returns a string of that many *. For example:

function starString(num) {
  var x = "*";
  return x.repeat(num)
}

let stars = starString(8)
console.log(stars);

//
// Part II
// Create a function called drawStars() that takes an array of numbers and prints out *.

function drawStars(arr) {
  for(i=0;i<arr.length;i++){
    console.log(starString(arr[i]));
  }
}
let x = [4, 6, 1, 3, 5, 7, 25]
drawStars(x)

// Part III
// Modify the function above. Allow an array containing integers and strings to be passed to the drawStars()
// function. When a string is passed, instead of displaying *, display the first letter of the string
// according to the example below. You may use the .toLowerCase() string method for this part.
function drawStarsNLettters(arr) {
  for(i=0;i<arr.length;i++){
    if(!isNaN(arr[i])){
      console.log(starString(arr[i]));
    }else{
      var letter;
       letter = arr[i][0]
      console.log(letter.repeat(arr[i].length).toLowerCase());
    }

  }
}
let x1 = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStarsNLettters(x1)
