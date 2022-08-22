let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1ScoreBoard = document.getElementById("player1Scorecard")
const player2ScoreBoard = document.getElementById("player2Scorecard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function displayButton(){
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}

rollBtn.addEventListener('click',()=>{
    const num = Math.floor((Math.random()  * 6) ) + 1;
    if(player1Turn){
        player1Dice.textContent = num
        player1Score = player1Score + num;
        player1ScoreBoard.textContent = player1Score;
        if(player1Score >= 20){
            message.textContent = "Player 1 has won 🥳"
            displayButton();
        } else {
        
        player2Dice.textContent = "-"; 
        player1Turn = false;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 Turn"
        }
    }else{
        player2Dice.textContent = num
        player2Score = player1Score + num;
        player2ScoreBoard.textContent = player2Score
        if(player2Score >= 20){
            message.textContent = "Player 2 has won 🥳"
            displayButton();
        }else {
        player1Dice.textContent = "-";
        player1Turn = true
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 Turn"
        }
    }
})

resetBtn.addEventListener('click',() => {
    reset();
})

function reset(){
    message.textContent="Player 1 Turn";
    player1ScoreBoard.textContent = 0
    player2ScoreBoard.texContent = 0
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    player1Score= 0;
    player2Score= 0;
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");

}