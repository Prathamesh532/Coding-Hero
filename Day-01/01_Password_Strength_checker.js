// you just need to implement the passwordStrengthChecker function
function passwordStrengthChecker(password) {
  // write your logic here

  let len = password.length;
  if (len < 8) return "Weak";

  let special = ["!", "@", "#", "$", "%", "^", "&", "*"];

  let upperCase = false;
  let lowerCase = false;
  let digit = false;
  let specialChar = false;

  for (const char of password) {
    let charCode = char.charCodeAt();

    if (charCode >= 65 && charCode <= 90) upperCase = true;
    if (charCode >= 97 && charCode <= 122) lowerCase = true;
    if (charCode >= 48 && charCode <= 57) digit = true;
    if (special.includes(char)) specialChar = true;

    if (upperCase && lowerCase && digit && specialChar) break;
  }

  if (upperCase && lowerCase && digit && specialChar) return "Strong";
  else return "Weak";
}
