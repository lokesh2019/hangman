import { createSlice } from "@reduxjs/toolkit";

export const hangmanSlice = createSlice ({
    name: "hangman",

    initialState: {
        wrongGuessCount: 0, //Game ends after 10 wrong guesses
        word: "", // The mystery word is stored here
        guessedLetters: [], // All guesses are stored here to keep track
        win: false, // true when the game is won
        lose: false // true when the game is lost
    },

    reducers: {
        reset: (state, action) => {
            /* Reset the current state and start over with the new word */
            state.wrongGuessCount = 0;
            state.win = false;
            state.lose = false;
            state.word = action.payload.toUpperCase();
            state.guessedLetters = [];
        },

        checkLetter: (state, action) => {
            /* Check if the given letter is in our word */
            let letter = action.payload.toUpperCase();
            /* Make note of the guessed letter */
            if (!state.guessedLetters.includes(letter))
                state.guessedLetters.push(letter);
            /* If the word doesn't include the letter, increment wrong guess count */
            if(!state.word.includes(letter))
                state.wrongGuessCount++;
        },

        checkGameState: (state) => {
            /* If we have exceeded wrong guesses, game is lost! */
            if (state.wrongGuessCount === 10){
                state.win = false;
                state.lose = true;
            } 
            /* If there are no more letters left to be guessed, the game is won! */
            else{
                let remainingLetter = false;
                for(let letter of state.word){
                    if (!state.guessedLetters.includes(letter)){
                        remainingLetter = true;
                        break;
                    }
                }
                if(!remainingLetter){
                    state.win = true;
                    state.lose = false;
                }
            }
        },
    },
});

export const {reset, checkLetter, checkGameState} = hangmanSlice.actions;
export default hangmanSlice.reducer;
