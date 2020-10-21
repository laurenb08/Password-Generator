// Assignment Code
var generateBtn = document.querySelector("#generate");

//object that stores the arrays for generating the random password//
  var passwordCharacters = {
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
    var charactersNeeded: [],
  }
  //Prompt user for password requirements including number and type of characters needed//
function generatePassword() {

    var passLength = prompt("How long should your password be? (must be between 8-100 characters)");
    alert("Your password will be " + passLength + " characters long.");
    var passUpper = confirm("Should your password include upper case letters?");
    var passLower = confirm("Should your password include lower case letters?");
    var passNum = confirm("Should your password include numbers?");
    var passSpecial = confirm("Should your password include special characters?")

  if (passUpper === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.passUpper.concat(passwordCharacters.charactersNeeded);
    console.log(passwordCharacters.charactersNeeded)
  }

  if (passLower === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.passLower.concat(passwordCharacters.charactersNeeded);
    console.log(passwordCharacters.charactersNeeded)
  }

  if (passNum === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.passNum.concat(passwordCharacters.charactersNeeded);
    console.log(passwordCharacters.charactersNeeded)
  }

  if (passSpecial === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.passSpecial.concat(passwordCharacters.charactersNeeded);
    console.log(passwordCharacters.charactersNeeded)
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
