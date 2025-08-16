let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll('.choice');
let msg = document.getElementById("msg");
let user_score = document.getElementById("user");
let comp_score = document.getElementById("computer");

const getcompchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

// Reset highlights before each round
function resetHighlights() {
    document.querySelectorAll('.choice').forEach(choice => {
        choice.classList.remove("win", "lose", "draw");
    });
}

const playgame = (userchoice) => {
    console.log("User choice is", userchoice);
    const compchoice = getcompchoice();
    console.log("Computer choice is", compchoice);

    const userDiv = document.getElementById(userchoice);
    const compDiv = document.getElementById(compchoice);

    resetHighlights(); // clear old highlights

    if (userchoice === compchoice) {
        msg.innerText = "It's a tie!";
        msg.style.background = "blue";

        userDiv.classList.add("draw");
        compDiv.classList.add("draw");
    } 
    else if (
        (userchoice === 'rock' && compchoice === 'scissors') ||
        (userchoice === 'paper' && compchoice === 'rock') ||
        (userchoice === 'scissors' && compchoice === 'paper')
    ) {
        userscore++;
        user_score.innerText = userscore;
        msg.innerText = `You win! ${userchoice} beats ${compchoice}`;
        msg.style.background = "green";

        userDiv.classList.add("win");
        compDiv.classList.add("lose");
    } 
    else {
        compscore++;
        comp_score.innerText = compscore;
        msg.innerText = `You lose! ${compchoice} beats ${userchoice}`;
        msg.style.background = "#ff006e";

        userDiv.classList.add("lose");
        compDiv.classList.add("win");
    }
};

// Event listeners for choices
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
