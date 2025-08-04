let UserScore=0;
let compScore=0;
let userscoreBoard = document.querySelector("#you-score");
let compscoreBoard = document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let resetbtn=document.querySelector("#reset-btn");

const restgame = ()=>{
    UserScore=false;
    compScore=false;
    userscoreBoard.innerText="0";
    compscoreBoard.innerText="0";
    msg.innerText = "Play the game";
    msg.style.backgroundColor="black";
}

const genCompChoice = () => {
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawgame = () => {
    //console.log("game draw");
    msg.innerText = "Game was Draw. Play again"
    msg.style.backgroundColor="Orange"
}

const showWinner = (Userwin, UserChoise, compChoice) => {
    if(Userwin){
        //console.log("you win")
        msg.innerText = `YOU WIN! 🥳😍 ${UserChoise} beats ${compChoice}`;
        msg.style.backgroundColor="green"
        UserScore++;
        userscoreBoard.innerText=UserScore;
        
    }
    else{
        // console.log("you lose")
        msg.innerText = `YOU LOSE! ${compChoice} beats ${UserChoise}`;
        msg.style.backgroundColor="red"
        compScore++;
        compscoreBoard.innerText=compScore;
    }
}

const playgame= (UserChoise) => {
    const compChoice = genCompChoice();
    //console.log(UserChoise);
    //console.log(compChoice);
    if(UserChoise===compChoice){
        drawgame();
    } else{
        let Userwin= true;
        if(UserChoise==="rock"){
            Userwin = compChoice === "paper" ? false : true;
        } else if(UserChoise==="paper"){
            Userwin = compChoice === "scissors" ? false : true;
        } else {
            Userwin = compChoice === "rock" ? false : true;
        }
        showWinner(Userwin, UserChoise, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoise= choice.getAttribute("id");
        playgame(UserChoise)
    })
})
resetbtn.addEventListener("click",restgame)