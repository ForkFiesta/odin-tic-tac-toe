// const r0c0 =document.querySelector('#r0c0');
// const r0c1 =document.querySelector('#r0c1');
// const r0c2 =document.querySelector('#r0c2');
// const r1c0 =document.querySelector('#r1c0');
// const r1c1 =document.querySelector('#r1c1');
// const r1c2 =document.querySelector('#r1c2');
// const r2c0 =document.querySelector('#r2c0');
// const r2c1 =document.querySelector('#r2c1');
// const r2c2 =document.querySelector('#r2c2');

/* 
Gameboard represents the current state of the tic-tac-toe board
Each square is a cell that can hold a player's shape (X or O)
 */

function gameBoard() {
  //initiaizing board
  const board = [];

  //populating empty ttt board
  for (let row = 0; row < 3; row++) {
    board[row] = [];
    for (let column = 0; column < 3; column++) {
      board[row][column] = null;
    }
  }

  const resetBoard = () => {
    for (let row = 0; row < 3; row++) {
      board[row] = [];
      for (let column = 0; column < 3; column++) {
        board[row][column] = null;
      }
    }
  };

  // return current board
  const getBoard = () => board;

  const printBoard = () => console.log(board);

  const addShape = (playerShape, row, col) => {
    if (board[row][col] === null) {
      board[row][col] = playerShape;
    } else {
      console.log("Cell already Occupied");
    }
  };

  const checkWinner = () => {
    //check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== "" &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        return board[i][0];
      }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] !== "" &&
        board[0][j] === board[1][j] &&
        board[0][j] === board[2][j]
      ) {
        return board[0][j];
      }
    }
    // check diagonals
    if (
      board[0][0] !== "" &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      return board[0][0];
    }
    if (
      board[0][2] !== "" &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      return board[0][2];
    }

    // No winner
    return null;
  };

  return {
    getBoard,
    addShape,
    resetBoard,
    printBoard,
    checkWinner,
  };
}

const createPlayer = (name, shape, playerTurn) => {
  let score = 0;
  const increaseScore = () => score++;
  const getScore = () => score;
  const getPlayerTurn = () => playerTurn;
  const changePlayerTurn = () => playerTurn != playerTurn;

  return {
    name,
    shape,
    getScore,
    increaseScore,
    getPlayerTurn,
    changePlayerTurn,
  };
};

const gameController = () => {
  const gameboard = gameBoard();

  //   const resetBoard = () => gameboard.resetBoard();
  const playerOne = createPlayer("Player One", "O", true);
  const playerTwo = createPlayer("player Two", "X", false);
  let currentPlayer = playerOne;
  const playRound = () => {
    gameboard.printBoard();

    let selectedCell;
    let row;
    let column;

    const cells = document.querySelectorAll(".cell");
    cells.forEach((element) => {
      element.addEventListener("click", () => {
        selectedCell = element.id;
        console.log("selected Cell: "+ selectedCell)
        let stringCell = selectedCell.toString();
        row = Number(stringCell.slice(1, 2));
        column = Number(stringCell.slice(-1));
        // console.log(column);
        const docCell = document.querySelector(`#${selectedCell}`);
        let childText = document.createElement("p");
        childText.innerHTML = currentPlayer.shape;
        docCell.appendChild(childText);


        gameboard.addShape(currentPlayer.shape, row, column);

        let playerWinnerShape = gameboard.checkWinner();
        if (playerWinnerShape) {
            if (playerOne.shape === playerWinnerShape) {
              console.log("Player One Wins!");
              playerOne.increaseScore();
              gameboard.resetBoard()
            } else {
              console.log("Player Two Wins!");
              playerTwo.increaseScore();
              gameboard.resetBoard();
            }
            
          }
          currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    // playRound();
      });
    });

    // let row = Number(stringCell.slice(1,1));

    // const playerRowInput = prompt(
    //   `${currentPlayer.name}'s Turn.\n Please Input your choice of Row:`
    // );
    // const playerColInput = prompt(`Please Input your choice of Column:`);

    

    // Switch turn
    
  };

  return {
    playRound,
  };
};

const myGameController = gameController();
myGameController.playRound();
