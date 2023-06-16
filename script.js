//DOM of the game
const points = document.createElement("div");
const player = document.createElement("div");
const comp = document.createElement("div");
points.appendChild(player);
points.appendChild(comp);

points.setAttribute("style", "display: flex; justify-content: space-around; padding: 0px; font-size: 30px;");
player.setAttribute("style", "color: blue; text-decoration: underline;");
comp.setAttribute("style", "color: red; text-decoration: underline;");

const result = document.createElement("div");
result.style.width = "500px";
result.style.fontSize = "20px";

const container = document.querySelector(".choice");
container.appendChild(points);
container.appendChild(result);


//Functions to the game
function getCompChoice () {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) 
        return "Rock";
    else if (choice == 1)
        return "Paper";
    else
        return "Scissors";
}

function getPlayerChoice () {
    const btns = document.querySelectorAll('button');

    btns.forEach((button) => {
        button.addEventListener('click', () => {
            return(button.id);
        });
    });
}

function playRound (playerChoice, compChoice) {
    if (playerChoice === compChoice)
        return 0;
    else if ((playerChoice === "Rock" && compChoice === "Paper") || (playerChoice === "Paper" && compChoice === "Scissors") || (playerChoice === "Scissors" && compChoice === "Rock"))
        return -1;
    else
        return 1;
}

function game () {
    const btns = document.querySelectorAll('button');
    let playerPoint = 0, compPoint = 0;

    btns.forEach((button) => {
        button.addEventListener('click', () => {
            let compChoice = getCompChoice();
            let roundWinner = playRound(button.id, compChoice);

            if (roundWinner == 1) {
                playerPoint++;
                result.textContent = "You won! " + button.id + " beats " + compChoice;
            }
            else if (roundWinner == -1) {
                compPoint++;
                result.textContent = "You lose! " + compChoice + " beats " + button.id;
            }
            else
                result.textContent = "It's tied!";

            player.textContent = "Player: " + playerPoint;
            comp.textContent = "Computer: " + compPoint;
            
            if (playerPoint == 5 || compPoint == 5) {
                if (playerPoint > compPoint)
                    result.textContent = "You win the game! 😊";
                else if (compPoint > playerPoint)
                    result.textContent = "The computer won the game 😔";
                else 
                    result.textContent = "It's tied!!!";

                result.textContent += "Press any button to play again";
                game();
            }   
        });
    });
}

game();