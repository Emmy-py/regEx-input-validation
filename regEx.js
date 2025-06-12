/*Write a js program to validate a credit card number. You can indicate the credit card type you are validating ex. Visa, Mastercard 

Also Write a js program to validate a email and password. 

Kindly drop a brief description that explains the regEx pattern you came up with*/


function validateCreditCard(cardNumber) {
  // Visa: Starts with 4, 13 or 16 digits
  const visaRegex = /^4\d{12}(\d{3})?$/;

  // MasterCard: Starts with 51-55, 16 digits
  const masterCardRegex = /^5[1-5]\d{14}$/;

  if (visaRegex.test(cardNumber)) {
    return "Valid Visa card";
  } else if (masterCardRegex.test(cardNumber)) {
    return "Valid MasterCard";
  } else {
    return "Invalid credit card number";
  }
}

function validateEmail(email) {
  // Simple email validation
  const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  /* Password rules:
   - Minimum 8 characters
   - At least one uppercase letter
   - At least one lowercase letter
   - At least one digit
   - At least one special character (!@#$%^&*)
  */
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
}

// Example Usage:
console.log(validateCreditCard("4111111111111111")); 
console.log(validateCreditCard("5500000000000004")); 
console.log(validateCreditCard("1234567890123456")); 
; // true
console.log(validateEmail("test@gmail.com"));
console.log(validateEmail("bad-email@com")); 

console.log(validatePassword("StrongP@ss1")); 
console.log(validatePassword("weakpass")); 