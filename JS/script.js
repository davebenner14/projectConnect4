const statusDisplay = document.querySelector(".game--status");
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const alertMessage = document.getElementsByClassName("alert");

let board = document.querySelector(".container");
let gameActive = true;
let currentPlayer = "yellow";
let bodyColor = "red";
let cols = board.children;
let tieCounter = 0;

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellClick(clickedCellEvent) {
  console.dir(clickedCellEvent.target);
  const clickedCell = clickedCellEvent.target;
  if (clickedCell.classList.contains("cell")) {
    const colEls = clickedCell.parentElement.children;

    for (let i = colEls.length - 1; i >= 0; i--) {
      if (!colEls[i].classList.contains("taken")) {
        colEls[i].style.backgroundColor = currentPlayer;
        document.getElementById("gameHeader").style.backgroundColor = bodyColor;
        colEls[i].classList.add("taken");

        tieCounter++;
        if (tieCounter == 16) {
          alert("Game has ended in a tie");
        }
        handlePlayerChange();
        checkWin();
        break;
      } else if (i === 0) {
        alert("Column is full");
      }
    }
  }
}
function handlePlayerChange() {
  currentPlayer = currentPlayer === "red" ? "yellow" : "red";
  bodyColor = currentPlayer === "red" ? "yellow" : "red";

  statusDisplay.innerHTML = currentPlayerTurn();
}
board.addEventListener("click", handleCellClick);

function checkWin() {
  for (let i = 0; i < cols.length; i++) {
    for (let y = 0; y <= cols[i].children.length; y++) {
      if (cols[i].children[y]) {
        let chipColour = cols[i].children[y].style.backgroundColor;

        if (cols[i].children[y + 3] === undefined) break;

        if (chipColour === "red" || chipColour === "yellow") {
          if (
            chipColour === cols[i].children[y + 1].style.backgroundColor &&
            chipColour === cols[i].children[y + 2].style.backgroundColor &&
            chipColour === cols[i].children[y + 3].style.backgroundColor
          ) {
            alertMessage.innerHTML = "Winner!!";
            console.log(currentPlayer + " wins");
          } else if (
            chipColour === cols[0].children[3].style.backgroundColor &&
            chipColour === cols[1].children[2].style.backgroundColor &&
            chipColour === cols[2].children[1].style.backgroundColor &&
            chipColour === cols[3].children[0].style.backgroundColor
          ) {
            alertMessage.innerHTML = "Winner!!";
            console.log(!currentPlayer + " wins");
            break;
          } else if (
            chipColour === cols[0].children[0].style.backgroundColor &&
            chipColour === cols[1].children[1].style.backgroundColor &&
            chipColour === cols[2].children[2].style.backgroundColor &&
            chipColour === cols[3].children[3].style.backgroundColor
          ) {
            alertMessage.innerHTML = "Winner!!";
            console.log(!currentPlayer + " wins");
            break;
          }
        }
      }
    }
  }
  for (let i = 0; i < cols.length; i++) {
    for (let y = 0; y <= cols[i].children.length; y++) {
      if (cols[i].children[y]) {
        let chipColour = cols[i].children[y].style.backgroundColor;
        if (chipColour === "red" || chipColour === "yellow") {
          if (
            chipColour === cols[i].children[y].style.backgroundColor &&
            chipColour === cols[i + 1].children[y].style.backgroundColor &&
            chipColour === cols[i + 2].children[y].style.backgroundColor &&
            chipColour === cols[i + 3].children[y].style.backgroundColor
          ) {
            if true = alertMessage.innerHTML = "Winner!!";
            console.log(currentPlayer + " wins");
            return;
          }
        }
      }
    }
  }
  for (let i = 0; i < cols.length; i++) {
    for (let y = 0; y <= cols[i].children.length; y++) {
      if (cols[i].children[y]) {
        let chipColour = cols[i].children[y].style.backgroundColor;
        if (chipColour === "red" || chipColour === "yellow") {
          if (
            chipColour === cols[i].children[0].style.backgroundColor &&
            chipColour === cols[i + 1].children[1].style.backgroundColor &&
            chipColour === cols[i + 2].children[2].style.backgroundColor &&
            chipColour === cols[i + 3].children[3].style.backgroundColor
          ) {
            alertMessage.innerHTML = "Winner!!";
            console.log(currentPlayer + " wins");
            break;
          }
        }
      }
    }
  }
}
