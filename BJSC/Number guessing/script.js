const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

let attempts = 0;
let gameOver = false;

function checkGuess() {
    if (gameOver) return;

    const input = document.getElementById("guessInput");
    const guess = Number(input.value);
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    if (isNaN(guess)) {
        message.textContent = "❌ Please enter a valid number.";
        message.style.color = "red";
        return;
    }

    if (guess < minimum || guess > maximum) {
        message.textContent = `⚠️ Enter a number between ${minimum} and ${maximum}.`;
        message.style.color = "orange";
        return;
    }

    attempts++;

    if (guess < answer) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "blue";
    } else if (guess > answer) {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "blue";
    } else {
        message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
        message.style.color = "green";
        gameOver = true;
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    input.value = "";
}
