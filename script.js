// Assignment Code
var generateBtn = document.querySelector("#generate");

// Why do we have these strings here?
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*()_+";

function getRandom(str) {
  // What is going on here?
  //*
  var randomIndex = Math.floor(Math.random() * str.length);
  // and here?
  //*
  return str[randomIndex];
}

// Write password to the #password input
function writePassword() {
  // What is the difference between return and console log?
  //*
  // What happens if we console log our password instead of returning it?
  //*
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Ask the user for their password criteria
  // 8 characters and no more than 128 characters
  // Prompt the user for the password length
  var length = prompt("How long would you like your password to be?");

  // If the length is less than 8 or more than 128
  if (length < 8 || length > 128) {
    // alert the user that they messed up
    alert("Your password must be between 8 and 128");
    // exit the function early, (use the return keyword)
    return "";
  }

  // What are we doing here?
  //*
  var useLowercase = confirm("Would you like to use lower case characters?");
  var useUppercase = confirm("Would you like to use upper case characters?");
  var useNumeric = confirm("Would you like to use numeric characters?");
  var useSpecial = confirm("Would you like to use special characters?");

  // Why is this if statement necessary?
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("We need at least one option to be chosen.");
   return "";
  }
  // this is the string for the password  
  var cupcake = ""
  // generate the password based off the criteria
  for (let i = 0; i < length; i++) {
    if (useLowercase) {
      cupcake += getRandom(lowercase)
    }
    if (useUppercase) {
      cupcake += getRandom(uppercase)
      
    }
    if (useNumeric) {
      cupcake += getRandom(numeric)
    }
    if (useSpecial) {
      cupcake += getRandom(special)
    }
  }
  // "return" that password
  return cupcake.substr(0,length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
