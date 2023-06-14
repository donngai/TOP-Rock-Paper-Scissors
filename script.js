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
    let input = prompt("Please enter 'Rock', 'Paper', or 'Scissors': ");

    input = input.toLowerCase();
    let cap = input.slice(0, 1);
    cap = cap.toUpperCase();

    return cap.concat(input.slice(1));
}

function playRound (playerChoice, compChoice) {
    //Default value for playerChoice if incorrect input
    if (playerChoice != "Rock" || playerChoice != "Paper" || playerChoice != "Scissors")
        playerChoice = "Rock";

    if (playerChoice === compChoice)
        return 0;
    else if ((playerChoice === "Rock" && compChoice === "Paper") || (playerChoice === "Paper" && compChoice === "Scissors") || (playerChoice === "Scissors" && compChoice === "Rock"))
        return -1;
    else
        return 1;
}

function game () {
    let playerPoint = 0;
    let compPoint = 0;

    //Get choice
    let playerChoice = getPlayerChoice();
    let compChoice = getCompChoice();
    
    //Determine winner
    let roundWinner = playRound(playerChoice, compChoice);
    if (roundWinner == 1) {
        playerPoint++;
        console.log("You won! " + playerChoice + " beats " + compChoice);
    }
    else if (roundWinner == -1) {
        compPoint++;
        console.log("You lose! " + compChoice + " beats " + playerChoice);
    }
    else
        console.log("It's tied");

    //Print winner
    if (playerPoint > compPoint)
        console.log("You win the game!");
    else if (compPoint > playerPoint)
        console.log("The computer won the game");
    else
        console.log("It's tied!!!")
}

game();