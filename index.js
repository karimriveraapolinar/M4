// IF Statements in JavaScript //
let age = 25;
if (age >= 21) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
// Nested IF Statement
// Got a License?

let hasLicense = true; //Boolean true false variable

if (age >= 16) {
  //if age is greater than 16
  if (hasLicense == true) {
    console.log("You are old enough to drive and have your license");
  } else {
    //No License
    console.log("You are old enough to drive but you do not have your license");
  }
} else {
  console.log("You are not old enough to drive");
}
age = 12;
// else if statement
if (age >= 100) {
  console.log("You are too old to brainrot on tiktok");
} else if (age < 0) {
  console.log("You are not born yet");
} else if (age == 0) {
  console.log("How is a baby on tiktok?");
} else if (age >= 13) {
  console.log("You are old enough to doomscroll");
} else {
  console.log("You must be 13+ to scroll tiktok");
}



function happyBirthday(username, birthdayAge) {
  console.log("Happy Birthday dear " + username);
  console.log("You are " + birthdayAge + " years old!");
  console.log("Happy Birthday to you");
}
happyBirthday("John", 25);  
happyBirthday("Jane", 30);
happyBirthday("Doe", 35);
happyBirthday("Smith", 40);

function add(x, y) {
  let result = x + y;
  return result;
}
let answer = add(5, 10);
console.log(answer);
console.log(add(5, 10));

function subtract(x, y) {
  let result = x - y;
  return result;
}
let subtractAnswer = subtract(8-5);
console.log(subtractAnswer);












