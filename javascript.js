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

  const checkWinner = () =>{
    //check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
          return board[i][0];
        }
      }
    
      // Check columns
      for (let j = 0; j < 3; j++) {
        if (board[0][j] !== "" && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
          return board[0][j];
        }
      }
      // check diagonals
      if (board[0][0] !== "" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
      }
      if (board[0][2] !== "" && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
      }
    
      // No winner
      return null;
  }

  return {
    getBoard,
    addShape,
    resetBoard,
    printBoard,
    checkWinner
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

    playerWinnerShape = gameboard.checkWinner();

    if (playerWinnerShape) {
        if (playerOne.shape === playerWinnerShape) {
            console.log("Player One Wins!");
            playerOne.increaseScore();
        } else {
            console.log("Player Two Wins!");
            playerTwo.increaseScore();
        }
    
        console.log(`Player One Score: ${playerOne.getScore()}\nPlayer Two Score: ${playerTwo.getScore()}`);
        gameboard.resetBoard();
    }
    

    // Switch turn
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    playRound();
  };

  return {
    playRound,
  };
};

const myGameController = gameController();
myGameController.playRound();
