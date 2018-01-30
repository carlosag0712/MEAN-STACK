// Assignment: JavaScript Math
// Complete the below challenges using JavaScript's Math object.
//
// Math 1
// Write a function called zero_negativity(). This function should take an array.
// Return true if the input array contains no negative numbers, return false if it does.
//
function zero_negativity(arr){
  for(i=0; i<arr.length;i++){
    if(arr[i]<0){
      return false;
    }
  }

  return true;
}

var arr = [-1,2,3,4]

console.log(zero_negativity(arr));
// Math 2
// Write a function called is_even(). This function should take an number.
// Return true if the input number is even, return false if the number is odd.
//
function is_even(num) {
  if(num%2==0){
    return true;
  }
  return false;
}
console.log(is_even(3));
// Math 3
// Write a function called how_many_even(). This function should take an array.
// Return the total number of elements in the array that are even. You may call is_even() to solve this.
//
function how_many_even(arr) {
  var count = 0;
  for(i=0;i<arr.length;i++){
    if(is_even(arr[i])){
      count ++;
    }
  }
  return count;
}
var arr = [1,2,3,4,5]
console.log(how_many_even(arr));

// Math 4
// Write a function called create_dummy_array(). This function should take a number n.
// Return an array of random numbers between 0 and 9 with the length of n.
//
function create_dummy_array(num) {
  var arr = []
  for(i=0;i<num;i++){
    let y = Math.floor(Math.random() * 10);
    arr.push(y);
  }
  return arr;
}
console.log(create_dummy_array(5));

// Math 5
// Write a function called random_choice(). This function should take an array.
// Return a random element of the array, based on its length. This function should never return undefined.
function random_choice(arr) {

  for(i=0;i<arr.length;i++){
    return arr[Math.floor(Math.random() * arr.length)]
  }
}
var arr = [33,4,22,12,9]
console.log(random_choice(arr));
