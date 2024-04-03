// This program will force you to enter a name.
let yourName;

do {
  yourName = prompt("What's your name");
  console.log(yourName);
}
while(!yourName);

------------------------------------------------------------------------------------------
//power of
let number = 0;
let result = 1;

while(number < 10){
  result *= 2;
  number++;
}

-----------------------------------------------------------------------------------------
//only if the input is actually a number
let yourNumber = Number(prompt("Enter number"));

if (!Number.isNaN(yourNumber)){
  console.log(`Welcome, your number is ${yourNumber}`);
}
else{
  console.log("error");
}

------------------------------------------------------------------------------------------
/** Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */
 for (let i = 0; i < 7; i++){
  console.log("#".repeat(i));
}

------------------------------------------------------------------------------------------
/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. */
for(let i = 0; i < 100; i++){
  let output = "";

  if (i % 3 === 0){
    output += "Fizz";
  }
  if (i % 5 === 0 && i % 3 !== 0){
    output += "Buzz";
  }
  if (output === ""){
    output = i;
  }
  console.log(output);
}

------------------------------------------------------------------------------------------
/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. */
for (let i = 0; i < 100; i++){
  let output = "";

  if(i % 3 === 0){
    output += "Fizz";
  }
  if(i % 5 === 0){
    output += "Buzz";
  }
  if(output ==== ""){
    output = i;
  }
  console.log(output)
}
------------------------------------------------------------------------------------------
/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # */
let size = 8;
let chessboard = "";

for (let  row = 1; row < size; row++){
  for (let col = 1; col < size; col++){
    if ((row + col) % 2 === 0){
      chessboard += " ";
    }
    else{
      chessboard += "#";
    }
}
  chessboard += "\n";
}
console.log(chessboard);

------------------------------------------------------------------------------------------
/* Number loop sequence */
let  sequence = "";

for (let i = 1; i < 10; i++){
  let currentNumber = "";
  for (let j = 1; j < i; j++){
    currentNumber += j;
  }
  sequence += currentNumber;

  if (i !== 10){
    sequnce += ", ";
  }
}
console.log(sequence);
