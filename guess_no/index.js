const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const message = document.getElementById("message");
const noOfGuesses = document.getElementById("no");

let count = 9;

submitButton.addEventListener("click", () => {
  message.textContent = "";
  const userGuess = Number(guessInput.value);

  const disableButton = () => {
    submitButton.disabled = "true";
  };

  noOfGuesses.innerHTML = `The remaining no of guess is : ${count}`;
  noOfGuesses.classList.remove("hide");
  noOfGuesses.style.color = "green";

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    message.style.color = "red";
    return;
  }
  if (count == 0) {
    message.textContent = `You entered the maximun no of guesses and the no is : ${randomNumber}`;
    message.style.color = "red";
    noOfGuesses.classList.add("hide");
    return;
  }
  if (userGuess == randomNumber && count != 0) {
    message.textContent =
      "Congratulations! You guessed the right number! Game Over";
    message.style.color = "green";
    noOfGuesses.classList.add("hide");
    disableButton();
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
    message.style.color = "blue";
  } else if (userGuess > randomNumber) {
    message.textContent = "Too high! Try again.";
    message.style.color = "blue";
  }

  guessInput.value = "";
  count--;
});
