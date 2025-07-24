const Player=mark=>({mark});

const Gameboard=(()=>{
  let board=["","","","","","","","",""];
  const getBoard=()=>board;
  const placeMark=(index,mark)=>{
    if(board[index]===""){
      board[index]=mark;
      return true;
    }
    return false;
  };
  const reset=()=>{board=["","","","","","","","",""];};
  return{getBoard,placeMark,reset};
})();

const GameController=(()=>{
  const playerX=Player("X");
  const playerO=Player("O");
  let currentPlayer=playerX;
  let isGameOver=false;

  const playRound=index=>{
    if(isGameOver||!Gameboard.placeMark(index,currentPlayer.mark))return;
    DisplayController.render();
    if(checkWin(currentPlayer.mark)){
      DisplayController.updateStatus(`Player ${currentPlayer.mark} wins!`);
      isGameOver=true;
    }else if(Gameboard.getBoard().every(cell=>cell!=="")){
      DisplayController.updateStatus("It's a draw!");
      isGameOver=true;
    }else{
      switchPlayer();
      DisplayController.updateStatus(`Current Turn: Player ${currentPlayer.mark}`);
    }
  };

  const switchPlayer=()=>{
    currentPlayer=currentPlayer===playerX?playerO:playerX;
  };

  const checkWin=mark=>{
    const winCombos=[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    return winCombos.some(combo=>
      combo.every(index=>Gameboard.getBoard()[index]===mark)
    );
  };

  const reset=()=>{
    currentPlayer=playerX;
    isGameOver=false;
  };

  return{playRound,reset};
})();

const DisplayController=(()=>{
  const boardElement=document.getElementById("gameboard");
  const statusText=document.getElementById("status");
  const restartButton=document.getElementById("restart");

  const render=()=>{
    boardElement.innerHTML="";
    Gameboard.getBoard().forEach((mark,index)=>{
      const cell=document.createElement("div");
      cell.classList.add("cell");
      cell.textContent=mark;
      cell.dataset.index=index;
      cell.addEventListener("click",()=>GameController.playRound(index));
      boardElement.appendChild(cell);
    });
  };

  const updateStatus=message=>{
    statusText.textContent=message;
  };

  restartButton.addEventListener("click",()=>{
    Gameboard.reset();
    GameController.reset();
    render();
    updateStatus("Current Turn: Player X");
  });

  return{render,updateStatus};
})();

DisplayController.render();
DisplayController.updateStatus("Current Turn: Player X");
