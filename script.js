let currentPlayer = 1;
let tile1Flipped = false;
let tile2Flipped = false;

const tile1 = document.getElementById('tile1');
const tile2 = document.getElementById('tile2');
const flipButton = document.getElementById('flipButton');
const statusText = document.getElementById('status');

flipButton.addEventListener('click', () => {
  if (currentPlayer === 1) {
    flipTile(tile1);
    tile1Flipped = true;
  } else {
    flipTile(tile2);
    tile2Flipped = true;
  }

  checkWin();
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
});

function flipTile(tile) {
  tile.classList.toggle('flipped');
}

function checkWin() {
  if (tile1Flipped && tile2Flipped) {
    if (currentPlayer === 1) {
      statusText.textContent = 'Player 1 Wins!';
    } else {
      statusText.textContent = 'Player 2 Wins!';
    }
    flipButton.disabled = true;
  }
}