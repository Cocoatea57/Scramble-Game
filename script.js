// An array of words to be used in the game
const words = ["instinctive", "cake", "afternoon", "sneaky", "chew", "divide", "pest", "stress", "stove", "talk", "damage", "sun", "design", "cruel", "tiny", "nose", "birds", "person", "magical", "suppose"];

// The word that the user has to gues rightly
let currentWord = "";

// The scrambled word that the user has to unscramble
let scrambledWord = "";

// function to scramble a word
function scramble(word) {
    // splits the word into an array of characters
    const arr = word.split('');
    // Shuffles the array randomly
    for (let i = arr.length - 1; i > 0; i--) {
        // Generate a random index
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // converts the array back to a string
    return arr.join('');
}


// the new game function starts a new game by selecting a random word from the words array and scrambling it
function newGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scramble(currentWord);
    // Ensure the scrambled word is not the same as original
    while (scrambledWord === currentWord) {
        scrambledWord = scramble(currentWord);
    }
    // Display the scrambled word to the user
    document.getElementById("guessContainer").textContent = scrambledWord;
    // Clear the input field
    document.getElementById("guess").value = "";
    // Set focus to the input field
    document.getElementById("guess").focus();
}

// Check user's guess
function checkGuess() {
    // Get the user's guess
    const userGuess = document.getElementById("guess").value.trim().toLowerCase();
    // Check if the user's guess is correct
    let result = document.getElementById("result");
    if (userGuess === currentWord) {
        result.textContent = "🎉 Correct! Kudos!";
        newGame();
    } 
    else {
        result.textContent = "Wrong! Try again.";
    }
}

// This function clears the current game state and resets the input field
function resetGame() {
    document.getElementById("guessContainer").textContent = "";
    document.getElementById("guess").value = "";
    currentWord = "";
    scrambledWord = "";
}

// Event listeners for buttons
document.getElementById("submit").addEventListener("click", checkGuess);
document.getElementById("new-word").addEventListener("click", newGame);
document.getElementById("reset").addEventListener("click", resetGame);

// Start with a word
newGame();
