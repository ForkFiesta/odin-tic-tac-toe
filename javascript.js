
/* 
Gameboard represents the current state of the tic-tac-toe board
Each square is a cell that can hold a player's shape (X or O)
 */


function gameBoard(){


    //initiaizing board
    const board = {};

    //populating empty ttt board
    for (let row = 0; row < 3; row++){
        for (let column = 0; column < 3; column++){
            board[`${row}, ${column}`] = null;
        }
    }

    const resetBoard = () =>{
        for (let row = 0; row < 3; row++){
            for (let column = 0; column < 3; column++){
                board[`${row}, ${column}`] = null;
            }
        }

    }



    // return current board
    const getBoard = ()=>board;

    

    const addShape = (playerShape, row, col) =>{

        const key = `${row},${col}`;
        
        if (board[key] === null){
            board[key] = playerShape;
        }
        else {
            console.log("Cell already Occupied");
        }


        

    }

    return{
        getBoard,
        addShape,
        resetBoard
    };
    



    
}

const createPlayer = (name, shape, playerTurn)=>{
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
        changePlayerTurn
    };

}

const gameController = (function(){

    const gameboard = gameBoard();

    const resetBoard = ()=>gameboard.resetBoard();

    const playRound = (playerOneName, playerTwoName) =>{
        const playerOne =createPlayer(playerOneName, 'O', true);
        const playerTwo = createPlayer(playerTwoName, 'X', false);

        


    }

    
})