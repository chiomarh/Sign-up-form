const form = document.getElementById('form');
const togglePassword = document.getElementByld('togglePassword');
const passwordInput = document.getElementByld('password');
function validatePassword() {
const password = document.getElementById('password').value;
if (password.length !== 8) {
  alert('password must be exactly 8 characters long.');
  return false;
}
  return true;
}
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordValue === '') {
    setError(passwordInput, 'Password cannot be empty');
  } else {
    setSuccess(email);
   }

function setError(element, message)
{
  element.classList.add('error');
  const errorDisplay = element.nextElementSibling;
  errorDisplay.innerText = message;
  errorDisplay.style.display = 'block';
}

//Validate email
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\])|(([a-zA-Z\-0-9+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}
});
