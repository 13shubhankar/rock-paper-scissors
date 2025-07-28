let userscore=0;
let compscore=0;
const choices = document.querySelectorAll('.choice');
let msg = document.getElementById("msg");
let user_score= document.getElementById("user");
let comp_score= document.getElementById("computer");

const getcompchoice=()=>{
    const options = ['rock', 'paper', 'scissors'];
    const randidx = Math.floor(Math.random() *3);
    return options[randidx];
}


const playgame=(userchoice)=>{
    console.log("user choice is", userchoice);
    const compchoice = getcompchoice();
    console.log("computer choice is", compchoice);
    if(userchoice === compchoice){
        msg.innerText = "It's a tie!";
        msg.style.background = "blue";
    }else if((userchoice === 'rock' && compchoice === 'scissors') ||
              (userchoice === 'paper' && compchoice === 'rock') ||
              (userchoice === 'scissors' && compchoice === 'paper')) {
        userscore++;
        user_score.innerText = userscore;
        msg.innerText = `You win! ${userchoice} beats ${compchoice}`;
        msg.style.background = "green";
    } else {       
         compscore++;
        comp_score.innerText =compscore;
        msg.innerText = `You lose! ${compchoice} beats ${userchoice}`;
       msg.style.background = "#ff006e";

    }

};
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    });
});
