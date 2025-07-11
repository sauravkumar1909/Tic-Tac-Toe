let turn = 'O';
let total_turn = 0;


let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let board_array = new Array(9).fill("E");
//   0.  1.  2.  3.  4.  5.  6.  7.  8
// ["E","E","E","E","E","E","E","E","E"]

 function showPopup(message) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  popupMessage.innerText = message;
  popup.classList.remove('hidden');
}

document.getElementById('close-popup').addEventListener('click', () => {
  document.getElementById('popup').classList.add('hidden');
});


function checkWinner(){

 
   
    for(let [index0,index1,index2] of winner)
    {
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2])
            return 1;
    }


    return 0;

}






// Print sahi se ho rha hai....

const printer = (event)=>{
   
    const element = event.target;
    // if board is empty
    if(board_array[element.id]==="E") 
   {
    total_turn++;
    if(turn==='O')
    {
        element.innerHTML = "O";
        board_array[element.id] = "O";
        if(checkWinner())
        {
            document.getElementById('winningMessage').innerHTML = "Winner is O";
            showPopup(`🎉 Congratulations! Player O wins!`)
            board.removeEventListener('click',printer);
            return;
        }
        turn = "X";
        document.getElementById("status").innerHTML = "Player X's turn";
    }
    else{
        element.innerHTML = "X";
        board_array[element.id] = "X";
        if(checkWinner())
        {
            document.getElementById('winningMessage').innerHTML = "Winner is X";
            showPopup(`🎉 Congratulations! Player X wins!`)
            board.removeEventListener('click',printer);
            return;
        }
        turn = "O";
        document.getElementById("status").innerHTML = "Player O's turn"; 
    }

    if(total_turn==9)
    {
        document.getElementById('winningMessage').innerHTML = "Match is Draw";
        showPopup(` Better Luck Next Time!!`)
        board.removeEventListener('click',printer);
    }

  }   
}


const board = document.getElementById('board');
board.addEventListener('click',printer);

const Restart = document.getElementById("restart");
Restart.addEventListener('click',()=>{
   const cell = document.getElementsByClassName('cell');

   Array.from(cell).forEach((value)=>{
     value.innerHTML = "";
   })


   turn = "O";
   total_turn = 0;
   board_array = new Array(9).fill("E");
   document.getElementById('winningMessage').innerHTML = "";
  
   board.removeEventListener('click',printer);
   board.addEventListener('click',printer);

})