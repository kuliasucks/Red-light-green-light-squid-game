const light = document.getElementById("light");
const player = document.getElementById("player");
const startButton = document.getElementById("startButton");
const message = document.getElementById("message");

let lightState = "red"; // Can be "red" or "green"
let gameInterval;
let playerPosition = 0;
let gameActive = false;

// Function to switch the light state
function switchLight() {
  if (lightState === "red") {
    lightState = "green";
    light.style.backgroundColor = "green";
  } else {
    lightState = "red";
    light.style.backgroundColor = "red";
  }
}

// Function to move the player
function movePlayer() {
  if (lightState === "green" && gameActive) {
    playerPosition += 10; // Move player 10 pixels up
    player.style.bottom = `${playerPosition}px`;

    // Check if the player wins
    if (playerPosition >= 500) {
      endGame("You Win!");
    }
  }
}

// Function to start the game
function startGame() {
  gameActive = true;
  playerPosition = 0;
  player.style.bottom = "20px";
  message.textContent = "";
  startButton.disabled = true;

  // Switch light every 2 seconds
  gameInterval = setInterval(() => {
    switchLight();
  }, 2000);

  // Listen for key presses (right arrow key)
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      movePlayer();
      // Check if the player moves during a red light
      if (lightState === "red") {
        endGame("Game Over! You moved during a red light.");
      }
    }
  });
}

// Function to end the game
function endGame(result) {
  gameActive = false;
  clearInterval(gameInterval);
  message.textContent = result;
  startButton.disabled = false;
  window.removeEventListener("keydown", movePlayer); // Remove the event listener
}

// Start the game when the button is clicked
startButton.addEventListener("click", startGame);