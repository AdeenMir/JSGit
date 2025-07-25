const minimum = 1;
const maximum = 100;
const answr =Math.floor(Math.random()* (maximum - minimum) + minimum);

console.log("The answer is: " + answr);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess=window.prompt("Guess a number between " + minimum + " and " + maximum + ":");
    guess =Number(guess);

    if( isNaN(guess)) {
        window.alert("Please enter a valid number.");
        continue;
    }
    if (guess < minimum || guess > maximum) {
        window.alert("Please enter a number within the range of " + minimum + " to " + maximum + ".");
    }
    else{
            attempts++;
            if (guess < answr) {
                window.alert("Too low! Try again.");
            }
            else if (guess > answr) {
                window.alert("Too high! Try again.");
            }
            else {
                window.alert("Congratulations! You've guessed the number " + answr + " in " + attempts + " attempts.");
                running = false;
            }
    }
    
}