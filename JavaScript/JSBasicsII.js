function magic_multiply(x, y) {
  var mult;

  if(Array.isArray(x)&& Array.isArray(y)){
    console.log("you can only have one array");
  }

  if(Array.isArray(x)){
    for(i=0;i<x.length;i++){

      x[i]= x[i]*y;

    }
    return x;
  }

  if(isNaN(x)){
    return x.repeat(y)
  }

  if(isNaN(y)){
    return "cannon multiply by string, go back to 1st grade math";
  }

  mult = x * y;
  return mult;
}

let test1 = magic_multiply(5,2);
console.log(test1);

let test2 = magic_multiply(0,0);
console.log(test2);

let test3 = magic_multiply([1,2,3], 2);
console.log(test3);

let test4 = magic_multiply(2, "String");
console.log(test4);

let test5 = magic_multiply("String", 2);
console.log(test5);
