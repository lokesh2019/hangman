import happyStickson from '../images/happyStickson.png'
import "../styles/Help.css"

/* Print all the hardcoded help text. */
function Help() {
    return (
    <div className='help-div'>
        <h1>Hangman: Rules</h1>
        <img src={happyStickson} className="stickson-image" alt='loading..'/>
        <p>
            Mr. Stickson is our best friend. He has been falsely accused of a serious crime and the
            evil judge has sentenced him to be hanged. The evil judge has agreed to release Mr. 
            Stickson if you can guess a random word decided by the judge before Mr. Stickson is
            hanged. His life is in your hands.. Good luck!
        </p>
        <p>
            The game begins by presenting the player empty boxes - one for each letter in the
            mystery word. Player guesses the letter by selecting a letter on the keyboard on screen.
            If the guessed letter exists in the word, the game reveals the position of that letter.
        </p>
        <p>
            If the player selects a letter that is not in the word, i.e. makes an incorrect guess,
            the game starts drawing a hanging man - one wrong guess at a time. After ten wrong
            guesses, the picture completes with a hanging man (hence the name hangman) and the 
            game is over.
        </p>
        <p>
            In summary, the purpose of the game is to guess the word correctly before Mr. Stickman
            is hanged.
        </p>
        <p>
            Press the RESET button at the bottom of the screen in the "PLAY GAME" tab to reset the game
            at any point. A new random word will be selected and the game will restart.
        </p>
        <p>
            Enjoy!! &#128526;
        </p>
    </div>);
}

export default Help;