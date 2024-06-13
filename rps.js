const hands = ['rock', 'paper', 'cissors'];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

// Players get defined here
const player1 = {
  name: 'Player 1',
  getHand: getHand,
};

const player2 = {
  name: 'Player 2',
  getHand: getHand,
};
// Where the action happens
function playRound(player1, player2) {
  const hand1 = player1.getHand();
  const hand2 = player2.getHand();

  console.log(`${player1.name} played: ${hand1}`);
  console.log(`${player2.name} played: ${hand2}`);

  if (hand1 === hand2) {
    console.log("It's a tie!");
    return null;
  }

  if (
    (hand1 === 'rock' && hand2 === 'scissors') ||
    (hand1 === 'cissors' && hand2 === 'paper') ||
    (hand1 === 'paper' && hand2 === 'rock')
  ) {
    console.log(`${player1.name} wins!`);
    return player1;
  } else {
    console.log(`${player2.name} wins!`);
    return player2;
  }
}

// just to test it
const winner = playRound(player1, player2);
if (winner) {
  console.log(`The winner is ${winner.name}`);
}