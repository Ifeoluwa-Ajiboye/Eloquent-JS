// using rest parameter to sum numbers up
function mySum(...args){
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

---------------------------------------------------------------------
// finding the max number using stack
  function myMax(){
    let max = -Infinity;
    for (let i = 0; i < arguments.length;  i++){
      if (arguments[i] > max){
        max = arguments[i];
      }
    }
    return max;
  }

---------------------------------------------------------------------
  // sum  using function
  function sumUp(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum;
  }

---------------------------------------------------------------------
  // Javascript function call method - Example
let name = {
  fullName : function(){
    return this.firstName + this.secondName;
  };
}

let personOne = {
  firstName : "Ifeoluwa",
  secondName : "Ajiboye"
}
let personTwo = {
  firstName : "Ajibola",
  secondName : "Ajiboye"
}

console.log(name.fullName.call(personOne));

---------------------------------------------------------------------
// Bind method - an object can borrow a method from another object.
// apply method - make use of array;
---------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------
/* Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean. */
function isEven(n){
  n = Math.abs(n);
  if (n === 0){
    return true;
  }
  else if (n === 1){
    return false;
  }
  else{
    return isEven(n - 2);
  }
}


--------------------------------------------------------------------
/* Write a function countBs that takes a string as its only argument and returns a number that indicates 
how many uppercase B characters there are in the string. */
function countB(str){
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if ( str[i] === "B"){
      count++;
    }
  }
  return count;
}

--------------------------------------------------------------------
/* Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates 
the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function */
 function countChar(str, char){
   let count = 0;
   for (let i = 0; i < str.length; i++){
     if (str[i] === char){
       count++
     }
  }
   return count;
 }
--------------------------------------------------------------------

--------------------------------------------------------------------
