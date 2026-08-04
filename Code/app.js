let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choices");

const msg = document.querySelector("#msg");

const Userscore = document.querySelector("#user-score");
const Computerscore = document.querySelector("#computer-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.alt;
        console.log("User choice =", userchoice);
        playgame(userchoice);
    });

});

const drawGame = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw!";
    msg.style.color = "blue";
};
const genComchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

const showWinner = (userwin) => {
    if (userwin) {
        userscore++;
        Userscore.innerText = userscore;
        console.log("User wins!");
        msg.innerText = "User wins!";
        msg.style.color = "green";
    } else{
        computerscore++;
        Computerscore.innerText = computerscore;
        console.log("Computer wins!");
        msg.innerText = "Computer wins!";
        msg.style.color = "red";
    }
    console.log(
        `Score - User: ${userscore}, Computer: ${computerscore}`
    );
};

const playgame = (userchoice) => {
    console.log("User choice =", userchoice);
    const computerchoice = genComchoice();
    console.log("Computer choice =", computerchoice);
    if (userchoice === computerchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = computerchoice === "paper"
                ? false
                : true;
        } else if (userchoice === "paper") {
            userwin = computerchoice === "scissors"
                ? false
                : true;
        } else {
            userwin = computerchoice === "rock"
                ? false
                : true;
        }
        showWinner(userwin);
    }
};