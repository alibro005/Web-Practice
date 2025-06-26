const boxes = document.querySelectorAll(".box");
const restartBtn = document.querySelector("#reset-btn");
const resetBtn = document.querySelector("#reset-btn1");

let messageContainer = document.querySelector(".message");
let message = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function sound() {
  const audioPath = "../sounds/kick-bass.mp3";
  var kick = new Audio(audioPath);
  kick.play().catch((error) => {
    console.error("Failed to play sound:", error);
  });
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    sound();
    count++;
    box.disabled = true;
    let isWinner = checkWinner();

    if (count == 9 && !isWinner) {
      gameDraw();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;

    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value == pos2value && pos2value == pos3value) {
        showWinner(pos1value);
        return true;
      }
    }
  }
};

const showWinner = (winner) => {
  message.innerText = `Congratulation the Winner is : ${winner}`;
  messageContainer.classList.remove("hide");
  disableBox();
};

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const gameDraw = () => {
  message.innerText = `Game is draw`;
  messageContainer.classList.remove("hide");
  disableBox();
};

const resetGame = () => {
  turn0 = true;
  messageContainer.classList.add("hide");
  enableBox();
};

restartBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
