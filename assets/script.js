// Assignment code here
var generateBtn = document.querySelector("#generate");
// Arrays of available characters for passwords
var numbersChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '.', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[',  ']', '^', '-', '`', '{', '|', '}', '~'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// function to gather user preference for password length 
function getInput() {
  var passwordLength = parseInt(
    prompt("Please input desired password length between 8 and 128 characters!"));
  if (passwordLength < 8){
    alert("minimum allowed characters is 8!")
  } 
  else if (passwordLength > 128) {
    alert("maximum allowed characters is 128!")
  }
  // confirm prompts for password characters to be included 
  var lowerPrompt = confirm("Click OK, to include lowercase letters");
  var upperPrompt = confirm("Click OK, to include UPPERCASE letters");
  var specialPrompt = confirm("Click OK, to include symbols");
  var numberPrompt = confirm("Click OK, to include numbers");

  var userChoices = {
    length: passwordLength,
    uppercase: upperPrompt,
    lowercase: lowerPrompt,
    numbers: numberPrompt,
    special: specialPrompt,
  }
  
  console.log(userChoices)
  return userChoices
}
// function that generates password
function generatePassword() {
  // password characters chosen from user choices
  userChoices = getInput()
  console.log(userChoices.length)
  let pwd = ''
  length = userChoices.length;
  massArray = []
  if (userChoices.uppercase) {
    pwd += randomizer(2, upperCase);
    massArray = massArray.concat(upperCase);
    console.log(massArray);
    length -= 1;
  }
  if (userChoices.lowercase) {
    pwd += randomizer(2, lowerCase);
    massArray = massArray.concat(lowerCase);
    console.log(massArray);
    length -= 1;
  }
  if (userChoices.numbers) {
    pwd += randomizer(2, numbersChar);
    massArray = massArray.concat(numbersChar);
    console.log(massArray);
    length -= 1;
  }
  if (userChoices.special) {
    pwd += randomizer(2, specialChar);
    massArray = massArray.concat(specialChar);
    console.log(massArray);
    length -= 1;
  }
console.log(length);
  pwd += randomizer(length, massArray);
  console.log(pwd);
  return pwd
}

function randomizer(numChars, charArray) {
  //  randomize characters for password
  var returnString = ''
  // console.log(charArray.toString());
  console.log(numChars)
  for (let i = 1; i <= numChars; i++) {
    console.log(i)
    returnString += charArray[Math.floor(Math.random() * charArray.length)]
    console.log(returnString)
  }
  return returnString;
}
// funtion to generate password
function writePassword() {
  var password = generatePassword()
// displays password in textarea password placeholder
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);


