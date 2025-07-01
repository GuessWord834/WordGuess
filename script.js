const words = ["apple", "grape", "chair", "hello", "plane", "japan", "zebra"];
const secret = words[Math.floor(Math.random() * words.length)];
let attempts = 0;

function makeGuess() {
  const input = document.getElementById("guessInput");
  const guess = input.value.toLowerCase();
  input.value = "";
  if (guess.length !== 5) {
    document.getElementById("message").innerText = "Please enter a 5-letter word!";
    return;
  }

  const row = document.createElement("div");
  row.className = "row";

  for (let i = 0; i < 5; i++) {
    const box = document.createElement("div");
    box.className = "letter";
    box.innerText = guess[i];

    if (guess[i] === secret[i]) {
      box.classList.add("correct");
    } else if (secret.includes(guess[i])) {
      box.classList.add("present");
    } else {
      box.classList.add("absent");
    }

    row.appendChild(box);
  }

  document.getElementById("game").appendChild(row);
  attempts++;

  if (guess === secret) {
    document.getElementById("message").innerText = `🎉 YOU GUESSED IT IN ${attempts} TRY(IES)! Word was "${secret.toUpperCase()}"`;
    document.getElementById("guessInput").disabled = true;
  } else if (attempts >= 6) {
    document.getElementById("message").innerText = `💀 GAME OVER! The word was "${secret.toUpperCase()}"`;
    document.getElementById("guessInput").disabled = true;
  }
}
