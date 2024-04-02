// This program will force you to enter a name.
let yourName;

do {
  yourName = prompt("What's your name");
  console.log(yourName);
}
while(!yourName);

------------------------------------------------------------------------------------------
//square
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
