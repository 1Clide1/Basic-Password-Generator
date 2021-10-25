// Assignment Code
var generateBtn = document.querySelector("#generate");
// set of all the arrays
var lowerCasePswrd= ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'z', 'x', 'c', 'v', 'b','n', 'm'];
  var upperCasePswrd= ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  var numberPswrd= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialCharPswrd= ['@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.'
];

function generatePassword(userChoices) {
  // empty string to hold the generated password
  var pass = ""
  // set defualt to lowercase since without it you wont get a password
  let allChars = lowerCasePswrd;
//  if uppercase is true
  if (userChoices.upperCase=== true){
  allChars.push(upperCasePswrd)}
// if numbers are true
  if (userChoices.numberChar===true){
  allChars.push(numberPswrd)}
// if special char is true
  if (userChoices.specialChar===true){
  allChars.push(specialCharPswrd)}

  allChars = allChars.join('')
// sets the loop to create the password length i had to use the full string assigned and not just plength to determine the actual length size that really stumped me haha
// chat.At makes sure it starts from 0,1,2, etc and math.floor rounds up math. random to a full number and not just a decimal
// += adds and assigns the loop to allChars and that is in () because without it, it thinks allChars is part of a function
  for (var i = 0; i < userChoices.plength; i++) {
   pass += (allChars).charAt(Math.floor(Math.random()*allChars.length));
    
  }
  return pass
}
function getUserOptions() {
  var userChoices = {};
  // ask for length
  //// have to parseInt the whole prompt to get an actual # not a string
  var plength = parseInt(prompt('How long do you want your password to be? (Between 8-128 characters long.'))
  // check if passlength is a number
  if (Number.isNaN(plength)) {
    window.alert('Password length must be a number');
    return null;
  }
  // if number is at least 8 chars long or more than 128 long then error message appears
  if (plength < 8 || plength > 128) {
    window.alert(' Try again please characters must be at least 8 long and no more than 128 characters long')
    return null;
  }
  userChoices.plength = plength
  // ask for uppercase
  var upperCase= confirm('Do you want uppercase?')
  userChoices.upperCase= upperCase;
  // ask for #
  var numberChar= confirm('Do you want numbers?')
  userChoices.numberChar= numberChar;
  // ask for special chars
  var specialChar= confirm('Do you want special characters?')
  userChoices.specialChar= specialChar;
  return userChoices;
}
// Write password to the #password input
function writePassword() {
  // get user options
  var userChoices = getUserOptions();
  var password = generatePassword(userChoices);
  var passwordText = document.querySelector("#password");
      

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
