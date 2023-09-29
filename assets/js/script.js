// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(lowercase, uppercase, numerical, special, passwordLength) {
  var charactersList = [];
  var temporaryPassword= "";

  if (lowercase) {
    charactersList.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }

  if (uppercase) {
    charactersList.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }

  if (numerical) {
    charactersList.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }

  if (special) {
    charactersList.push(" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "|", "}", "~");
  }

  for(var i = 0; i < passwordLength; i++) {
    temporaryPassword = temporaryPassword.concat(charactersList[Math.floor(Math.random() * charactersList.length)]);
  }
  return temporaryPassword;
}

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordLength;
  var promptConfirmWindow;

  var promptAnswer = ((window.prompt("Click on the answer box and type a number from 8 to 120. Then press 'Enter' or the 'OK' button.")));
  if (promptAnswer == null) {
    return;
  }
  promptAnswer = Math.floor(promptAnswer);
  if (promptAnswer >= 8 && promptAnswer <= 120) {
    promptConfirmWindow = window.confirm(promptAnswer + " was entered for the password length. Proceed if this is correct.");
    passwordLength = promptAnswer;
    if (!promptConfirmWindow) {
      return;
      window.alert("An invalid response was entered. Try again.");
    }
  }

  var lowercase = false;
  var uppercase = false;
  var numerical = false;
  var special = false;
  promptConfirmWindow = window.confirm("Should this password include lowercase characters?");
  if (promptConfirmWindow) {
    lowercase = promptConfirmWindow;
  }

  promptConfirmWindow = window.confirm("Should this password include uppercase characters?");
  if (promptConfirmWindow) {
    uppercase = promptConfirmWindow;
  }

  promptConfirmWindow = window.confirm("Should this password include numerical characters?");
  if (promptConfirmWindow) {
    numerical = promptConfirmWindow;
  }

  promptConfirmWindow = window.confirm("Should this password include special characters?");
  if (promptConfirmWindow) {
    special = promptConfirmWindow;
  }

  if (lowercase || uppercase || numerical || special) {
    var password = generatePassword(lowercase, uppercase, numerical, special, passwordLength);
  } else {
    window.alert("Cannot make a password with the given settings.\nAt least one of the four sets of characters must be toggled on for the random generator to work.");
    return;
  }
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);