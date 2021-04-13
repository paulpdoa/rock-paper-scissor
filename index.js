const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const winner = document.querySelector('.game-winner');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

rock.addEventListener('click',() => {
    computerRock();
    player.innerHTML = "rock";
})
paper.addEventListener('click',() => {
    computerPaper();
    player.innerHTML = "paper";
})
scissor.addEventListener('click',() => {
    computerScissor();
    player.innerHTML = "scissor";
})

const computerRock = () => {
    const computerWeapon = ['rock','paper','scissor'];
    const computerChose = computerWeapon[Math.floor(Math.random() * 3)];

    if(computerChose === "rock"){
        winner.innerHTML="It's a tie";
        computer.innerHTML = computerChose;
    } else if(computerChose === "paper"){
       winner.innerHTML="You Lose!";
       computer.innerHTML = computerChose;
    } else {
        winner.innerHTML="You Won!";
        computer.innerHTML = computerChose;
    }
}

const computerPaper = () => {
    const computerWeapon = ['rock','paper','scissor'];
    const computerChose = computerWeapon[Math.floor(Math.random() * 3)];
    
    if(computerChose === "paper"){
        winner.innerHTML="It's a tie";
        computer.innerHTML = computerChose;
    } else if(computerChose === "scissor"){
       winner.innerHTML="You Lose!";
       computer.innerHTML = computerChose;
    } else {
        winner.innerHTML="You Won!";
        computer.innerHTML = computerChose;
    }
}

const computerScissor = () => {
    const computerWeapon = ['rock','paper','scissor'];
    const computerChose = computerWeapon[Math.floor(Math.random() * 3)];
    // computerChose === "rock" ? winner.innerHTML = "It's a tie" : computerChose === "paper" ? winner.innerHTML = "You Lose!" : winner.innerHTML = "You Win!";
    if(computerChose === "scissor"){
        winner.innerHTML="It's a tie";
        computer.innerHTML = computerChose;
    } else if(computerChose === "rock"){
       winner.innerHTML="You Lose!";
       computer.innerHTML = computerChose;
    } else {
        winner.innerHTML="You Won!";
        computer.innerHTML = computerChose;
    }


}
