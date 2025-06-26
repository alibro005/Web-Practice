const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

// Name Validation

function validateName() {
  const name = document.getElementById("name").value.trim();
  const regex = /^[A-Za-z\s]+$/;
  if (name === "") {
    nameError.innerHTML = "Please enter a name";
    return false;
  }
  if (!regex.test(name)) {
    nameError.innerHTML = "Name can only contain letters and spaces";
    return false;
  }

  nameError.innerHTML = "<img src=check.png>";
  return true;
}

// Phone Number Validation

function validatePhone() {
  const phone = document.getElementById("phone").value.trim();
  const regex = /^[0-9]{11}$/;
  if (phone === "") {
    phoneError.innerHTML = "Phone number cannot be empty";
    return false;
  }
  if (!regex.test(phone)) {
    phoneError.innerHTML = "Phone number must be 11 digits";
    return false;
  }

  phoneError.innerHTML = "<img src=check.png>";
  return true;
}

// Email Validation
function validateEmail() {
  const email = document.querySelector("#email").value.trim();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
    emailError.innerHTML = "Email cannot be empty";
    return false;
  }
  if (!regex.test(email)) {
    emailError.innerHTML = "Invalid email format";
    return false;
  }
  emailError.innerHTML = "<img src=check.png>";
  return true;
}

// Message Validation
function validateMessage() {
  const message = document.querySelector("#message").value.trim();
  if (message === "") {
    messageError.innerHTML = "Message cannot be empty";
    return false;
  }
  if (message.length < 12) {
    messageError.innerHTML = "Message should be at least 12 characters long";
    return false;
  }
  messageError.innerHTML = "<img src=check.png>";
  return true;
}

// Final Submit Validation
function validateForm(event) {
  event.preventDefault();

  const isValidName = validateName();
  const isValidPhone = validatePhone();
  const isValidEmail = validateEmail();
  const isValidMessage = validateMessage();

  if (isValidName && isValidPhone && isValidEmail && isValidMessage) {
    submitError.innerHTML = "Form submitted successfully!";
    submitError.style.color = "green";
  } else {
    submitError.innerHTML = "Please fix the errors before submitting.";
  }
}

// // Event Listeners
document.querySelector("form").addEventListener("submit", validateForm);
// document.getElementById("name").addEventListener("keyup", validateName);
// document.getElementById("phone").addEventListener("keyup", validatePhone);
// document.getElementById("email").addEventListener("keyup", validateEmail);
// document.getElementById("message").addEventListener("keyup", validateMessage);
