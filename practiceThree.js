//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end
function range(start, end){
  let array = [];
  for(let i = start; i <= end; i++){
    array.push(i);
  }
  return array;
}

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
function sum(array){
  let total = 0;
  for(let value of array){
    total += value;
  }
  return total;
}

//modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go 
//up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step 
//values so that range(5, 2, -1) produces [5, 4, 3, 2]
function range(start, end, step = start < end ? 1 : -1){
  let array = [];
  if (step < 0){
    for(let i = start; i <= end; i += step) array.push(i);
  }
  else{
    for(let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// reverseArray, should take an array as argument and produce a new array that has the same elements in the inverse order.
  function reverseArray(array){
    let output = [];

    for (let i = array.length - 1; i >= 0;  i++){
      output.push(array[i]);
    }
  }

// reverseArrayInPlace, should do what the reverse method does: modify the array given as argument by reversing its elements. 
// Neither may use the standard reverse method.
function reverseArrayInPlace(array){

  for (let i = 0; i < Math.floor(array.length / 2); i++){
    let old = array[i];
    array[i] = array[array.length -  1 - i];
    array[array.length -  1 - i] = old;
  }
  return array;
}

----------------------------------------------------------------------------------------------------------------------------------------------------

  
