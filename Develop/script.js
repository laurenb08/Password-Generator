// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

  var passLength = prompt("How long should your password be?");
  alert("Your password will be " + passLength + " characters long.");

  var passUpper = confirm("Should your password include upper case letters?");
    if (confirm == true) {
      alert("We will include upper case letters.")
    } else {
      alert("We will NOT include upper case letters.")
    }

  var passLower = confirm("Should your password include lower case letters?");
    if (confirm == true) {
      alert("We will include lower case letters.")
    } else {
      alert("We will NOT include lower case letters.")
    }
  var passNum = confirm("Should your password include numbers?")
    if (confirm == true) {
      alert("We will include numbers.")
    } else {
      alert("We will NOT include numbers.")
    }

  var passSpecial = confirm("Should your password include special characters?")
    if (confirm == true) {
      alert("We will include special characters.")
    } else {
      alert("We will NOT include special characters.")
    }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
