const rock = document.querySelector("#rock-button");

const paper = document.querySelector("#paper-button");

const scissor = document.querySelector("#scissor-button");

const demo = document.getElementById("demo");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const tie = document.getElementById("tie");

let result = '';
let computerMove = '';

let scorelose = 0;
let scorewin = 0;
let scoretie = 0;

function computerGuess(){

    if((Math.floor(Math.random() * 3 ) + 1) === 1){
        computerMove = 'Rock';
    } else if ((Math.floor(Math.random() * 3 ) + 1) === 2){
        computerMove = 'Paper';
    } else if ((Math.floor(Math.random() * 3 ) + 1) === 3){
        computerMove = 'Scissor';
    }
}

rock.addEventListener("click", () =>{

    computerGuess();

    if(computerMove === 'Rock'){
        result = 'Tie';
        scoretie = scoretie + 1;
        tie.innerHTML = scoretie;
    } else if(computerMove === 'Paper'){
        result = 'Lose';
        scorelose = scorelose + 1;
        lose.innerHTML = scorelose;
    } else if(computerMove === 'Scissor'){
        result = 'Win';
        scorewin = scorewin + 1;
        win.innerHTML = scorewin;
    }

    demo.innerHTML = `You chose Rock. Computer chose ${computerMove}. You ${result}`;
});

paper.addEventListener("click", ()=>{
    computerGuess();

    if(computerMove === 'Rock'){
        result = 'Win';
        scorewin = scorewin + 1;
        win.innerHTML = scorewin;
    } else if(computerMove === 'Paper'){
        result = 'Tie';
        scoretie = scoretie + 1;
        tie.innerHTML = scoretie;
    } else if(computerMove === 'Scissor'){
        result = 'Lose';
        scorelose = scorelose + 1;
        lose.innerHTML = scorelose;
    }

    demo.innerHTML = `You chose Paper. Computer chose ${computerMove}. You ${result}`;
});

scissor.addEventListener("click",()=>{
    computerGuess();

    if(computerMove === 'Rock'){
        result = 'Lose';
        scorelose = scorelose + 1;
        lose.innerHTML = scorelose;
    } else if(computerMove === 'Paper'){
        result = 'Win';
        scorewin = scorewin + 1;
        win.innerHTML = scorewin;
    } else if(computerMove === 'Scissor'){
        result = 'Tie';
        scoretie = scoretie + 1;
        tie.innerHTML = scoretie;
    }

    demo.innerHTML = `You chose Scissor. Computer chose ${computerMove}. You ${result}`;
})