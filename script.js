const boxes = document.querySelectorAll('.box');
const arr = ['','','','','','','','',''];
let playerSymbol = 'X';
let turnLeft = false;
const message = document.querySelector('#message');

boxes.forEach(box => {
    box.addEventListener('click', ()=>{
        handleClick(box);
    });
})

function updateTurn(box){
    playerSymbol = playerSymbol==='X'?'O':'X';
    if(playerSymbol==='X'){
        box.style.color = "red";
        message.innerHTML = `Player 1's turn`;
    }
        
    else{
        box.style.color = "yellow";
        message.innerHTML = `Player 2's turn`;
    } 
}

function checkDraw(){
    turnLeft = false;
    for(let i=0;i<9;i++){
        if(arr[i]==='') turnLeft = true;
    }
    if(!turnLeft) return true;
    return false;
}
function checkWinner(){
    for(let i=0;i<=2;i++){
        if(arr[i]!=='' && arr[i]==arr[i+3] && arr[i+3]==arr[i+6]) return arr[i];
    }

    for(let i=0;i<=6;i+=3){
        if(arr[i]!=='' && arr[i]==arr[i+1] && arr[i+1]==arr[i+2]) return arr[i];
    }
    
    if(arr[0]!=='' && arr[0]==arr[4] && arr[4]==arr[8]) return arr[0];
    if(arr[2]!=='' && arr[2]==arr[4] && arr[4]==arr[6]) return arr[2];
    return -1;
    
}

function gameOver(){
    const winner = checkWinner();
    if(winner!==-1){
        message.innerHTML = `Player${winner==='X'?1:2} Won!!!`;
        return true;
    }
    if(checkDraw()){
        message.innerHTML = "Game Draw!";
        return true;
    } 
    return false;
}

function handleClick(box){
    if(arr[box.id - 1] !== '' || gameOver()) return;
    arr[box.id - 1] = playerSymbol;
    box.innerHTML = playerSymbol;
    // console.log('clicked' , box.id);
    updateTurn(box);
    gameOver();
}

function newGame(){
    location.reload();
}