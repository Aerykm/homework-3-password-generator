// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var speccharacters = ["!", "#", "$", "%", "^", "&", "*", "<", "?", ">", "=", "+", "-", "_", "|"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var confirmLength;
var confirmcharacters;
var confirmnumber;
var confirmupperCase;
var confirmlowerCase;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    var confirmLength = (prompt("how many characters do yo want your password to consist of?"));

    if (confirmLength < 8 || confirmLength > 128) {
        alert("Password must be between 8 and 128 characters");
        return
    }
    var number = confirm("do you want numbers?")
    var characters = confirm("do you want special characters")
    var upperCase = confirm("do you want uppercase characters?")
    var lowerCase = confirm("do you want lowercase characters")

    while (! (lowerCase || upperCase || number || characters))
    {
      alert("enter at least one type of character")
      var number = confirm("do you want numbers?")
      var characters = confirm("do you want special characters")
      var upperCase = confirm("do you want uppercase characters?")
      var lowerCase = confirm("do you want lowercase characters")

    }

    if (lowerCase === true){
      confirmcharacters += lowerCase
    }
    if (upperCase === true){
      confirmcharacters += upperCase
    }
    if (characters === true){
      confirmcharacters += characters
    }
    if (number === true){
      confirmnumber += number
    }

    for( var i = 0; i< confirmLength; i++){
      password += confirmcharacters.charAt(Math.floor(Math.random() * confirmcharacters.length));
    
    }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
