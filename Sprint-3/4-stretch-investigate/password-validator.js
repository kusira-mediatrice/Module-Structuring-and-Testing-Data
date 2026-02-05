const passwords = ["Password1!", "Welcome123#", "Admin@2020", "User$4567"];
function isValidPassword(password) {
  // At least 5 characters long
  if (password.length <= 5) return false;

  // Must contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) return false;

  // Must contain at least one lowercase letter
  if (!/[a-z]/.test(password)) return false;

  // Must contain at least one digit
  if (!/\d/.test(password)) return false;

  // At least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;

  //Must not be any previous password in the passwords array
  if (passwords.includes(password)) return false;

  return true;
}

module.exports = isValidPassword;
