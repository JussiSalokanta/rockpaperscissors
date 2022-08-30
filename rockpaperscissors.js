
// Randomly return one of the items in the array to be the opponents choice
function getComputerChoice () {
   
    let items= ['rock', 'paper', 'scissors'];
    let compChoice = items[Math.floor(Math.random()*items.length)];

    return compChoice

}

getComputerChoice();
