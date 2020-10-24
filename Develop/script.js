// Assignment Code
var generateBtn = document.querySelector("#generate");

//object that stores the arrays for generating the random password//
  var passwordCharacters = {
    upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    specialChar: ["!", "@", "#", "$", "%", "^", "&", "*"],
    charactersNeeded: [],
  }
 
  console.log(passwordCharacters);
  
  //Prompt user for password requirements including number and type of characters needed//
function generatePassword() {
    var passLength = prompt("How long should your password be? (must be between 8-100 characters)");
    // alert("Your password will be " + passLength + " characters long.");
    var passUpper = confirm("Should your password include upper case letters?");
    var passLower = confirm("Should your password include lower case letters?");
    var passNum = confirm("Should your password include numbers?");
    var passSpecial = confirm("Should your password include special characters?");

  if (passLength < 8 || passLength > 100) {
    alert("Please enter a password length between 8 and 100");
    return;
  }

  if (passUpper === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.upperCase.concat(passwordCharacters.charactersNeeded);
    console.log(passwordCharacters.charactersNeeded)
  }

  if (passLower === true) { //lowercase
    passwordCharacters.charactersNeeded = passwordCharacters.lowerCase.concat(passwordCharacters.charactersNeeded);
    console.log("yes to lowercase:", passwordCharacters.charactersNeeded)
  }

  if (passNum === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.numbers.concat(passwordCharacters.charactersNeeded);
    console.log("yes to nums:",passwordCharacters.charactersNeeded)
  }

  if (passSpecial === true) {
    passwordCharacters.charactersNeeded = passwordCharacters.specialChar.concat(passwordCharacters.charactersNeeded);
    console.log("yes to chars needed:",passwordCharacters.charactersNeeded)
  }
  //we loop over the array the amt of times the user specifies 
var array = passwordCharacters.charactersNeeded;
console.log(passLength);
  //iterate  selected number of times...setting loop length
  var num;
  var finalArray =[];
  for (let index = 0; index < passLength; index++){
    //randomize that many times
    num = Math.floor(Math.random()*array.length)
    element = array[index] //creating a new index which is the random character
    //push into the final version of an array
    finalArray.push(element)
  }
  return finalArray.join(" ");
}

// Write password to the #password input
function writePassword() {
  //call the generatepw func and assign to password variable
  var password = generatePassword();
  //select the html document area where the passwrd will go assign it to a variable
  var passwordText = document.querySelector("#password");

  //assign password which is the function, to the value of the textarea 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);