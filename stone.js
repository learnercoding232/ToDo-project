let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector(".msg")
const userpara=document.querySelector(".user-scoree")
const comppara=document.querySelector(".comp-scoree")
const getcompchoice = () => {

    const Option = ["rock", "paper", "scissors"];

    const randindx = Math.floor(Math.random() * 3);

    return Option[randindx];
};
const draw = () => {
    console.log("game was draw!")
    msg.innerText="Game was draw!"
    msg.style.backgroundColor="black"
    
}

const showwin = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        userpara.innerText=userscore;
        console.log("you are win")
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"
    } else {
        compscore++;
        comppara.innerText=compscore;
        console.log("you are lose")
        msg.innerText=`You lose! ${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor="red"
    }
}

const playgame = (userchoice) => {

    console.log("user choice = ", userchoice);

    const compchoice = getcompchoice();

    console.log("comp choice = ", compchoice);

    if (userchoice === compchoice) {
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwin(userwin,userchoice,compchoice);
    }

};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const choiceid = choice.getAttribute("id");

        playgame(choiceid);
    });
});