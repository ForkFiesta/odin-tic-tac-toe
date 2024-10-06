/* 
Gameboard represents the current state of the tic-tac-toe board
Each square is a cell that can hold a player's shape (X or O)
 */

function gameBoard() {
  //initiaizing board
  const board = {};

  //populating empty ttt board
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      board[`${row}, ${column}`] = null;
    }
  }

  const resetBoard = () => {
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        board[`${row}, ${column}`] = null;
      }
    }
  };

  // return current board
  const getBoard = () => board;

  const printBoard = () => console.log(board);

  const addShape = (playerShape, row, col) => {
    const key = `${row},${col}`;

    if (board[key] === null) {
      board[key] = playerShape;
    } else {
      console.log("Cell already Occupied");
    }
  };

  return {
    getBoard,
    addShape,
    resetBoard,
    printBoard,
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

    const playerRowInput = prompt(
      `${currentPlayer.name}'s Turn.\n Please Input your choice of Row:`
    );
    const playerColInput = prompt(`Please Input your choice of Column:`);

    gameboard.addShape(currentPlayer.shape, playerRowInput, playerColInput);

    // Switch turn
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  };

  return {
    playRound,
  };
};

const myGameController = gameController();
myGameController.playRound();
