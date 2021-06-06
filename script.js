// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var password = ""
  var length = prompt("how long is your password")
  console.log(length)
  var isUpper = confirm("is there uppercase")
  console.log(isUpper)
  var isNumber = confirm("are there numbers")
  console.log(isNumber)
  var isSpecialChar = confirm("are there special characters")
  console.log(isSpecialChar)
  var isLower = confirm("is there lowercase")
  console.log(isLower)
  var chosencharacters = ""
  if (isUpper) {
    chosencharacters = chosencharacters + uppercase
  }
  if (isLower) { 
    chosencharacters = chosencharacters + lowercase
  } 
  if (isNumber) { 
    chosencharacters = chosencharacters + numbers
  }
  if (isSpecialChar) {
    chosencharacters = chosencharacters + special
  }
console.log(chosencharacters) 
for (var i = 0; i < length; i++) {
  var randomplace = Math.floor(Math.random() * chosencharacters.length)
 var randomchar = chosencharacters.charAt(randomplace) 
console.log (randomchar) 
password += randomchar
}return password
console.log(password)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
