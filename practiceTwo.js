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
