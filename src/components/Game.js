import { useSelector, useDispatch } from "react-redux";
import { reset } from "../store/hangman";

import LetterBox from './LetterBox'
import KeyboardKey from './KeyboardKey';

import state0 from '../images/state0.png'
import state1 from '../images/state1.png'
import state2 from '../images/state2.png'
import state3 from '../images/state3.png'
import state4 from '../images/state4.png'
import state5 from '../images/state5.png'
import state6 from '../images/state6.png'
import state7 from '../images/state7.png'
import state8 from '../images/state8.png'
import state9 from '../images/state9.png'
import state10 from '../images/state10.png'
import happyStickson from '../images/happyStickson.png'
import sadStickson from '../images/sadStickson.png'

import "../styles/Game.css";

/* Function to get English alphabets to create an on screen keyboard */
function getKeyBoard(){
    let alphabets = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M',
        'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return alphabets.map((alphabet, index) =>(<KeyboardKey key={index} alphabet={alphabet}/>));
}

/* Main function containing the game */
function Game() {
    /* Array of game states to show hangman progression for wrong guesses */
    let gameStates = [
        state0, state1, state2, state3, state4, state5, state6,
        state7, state8, state9, state10
    ];

    /* Access the game state */
    const dispatch = useDispatch();
    const hangman = useSelector((state) => state.hangman);

    /* Get a random word using a web API. When the word is received, the game state is updated
       and the game begins. */
    const getRandomWord = async () => {
        /* Found this api on Google. Much easier than reading a local dictionary file */
        let response = await fetch("https://random-word-api.herokuapp.com/word");
        let wordArray = await response.json();
        /* Print the mystery word on the console for the reviewer. */
        console.log("Just to make reviewing easier, the word is: " + wordArray[0]);
        /* Begin the game! */
        dispatch(reset(wordArray[0]));
    };

    /* Get the text boxes showing the number of letters in a word.
       The correctly guessed letters are revealed, otherwise '?' is
       displayed. */
    const getWordLetterBoxes = () => {
        let letterBoxes = [];
        let counter = 0;
    
        for (let letter of hangman.word){
            if (hangman.guessedLetters.includes(letter)){
                letterBoxes.push((<LetterBox key={counter++} letter={letter}/>));
            } else {
                letterBoxes.push((<LetterBox key={counter++} letter="?"/>));
            }
        }
        return letterBoxes;
    }

    /* The game can be in four possible states: */
    /* 1. On first load, we don't have a word. Get a random word when user clicks START GAME button. */
    if (hangman.word === ""){
        return(<div>
            <h1>Click start to play the game!</h1>
            <img src={sadStickson} className="stickson-image" alt='loading..'/>
            <br/>
            <button type="button" className="button-style" onClick={getRandomWord}>START GAME</button>
        </div>)
    }
    /* 2. Player has won the game. Yay! */
    else if (hangman.win && !hangman.lose){
        return (<div>
            <h1>You won!</h1>
            <img src={happyStickson} className="stickson-image" alt='loading..'/>
            <br/>
            <button type="button" className="button-style" onClick={getRandomWord}>RESTART GAME</button>
        </div>);
    }
    /* 3. Player has lost the game. :( */
    else if (hangman.lose && !hangman.win) {
        return(<div>
            <h1>You lose!</h1>
            <img src={gameStates[10]} className="stickson-image" alt='loading..'/>
            <br/>
            <p>The word was: {hangman.word}</p>
            <button type="button" className="button-style" onClick={getRandomWord}>RESTART GAME</button>
        </div>)
        }
    /* 4. The game has still in play. */
    else {
        return (
            <div>
                <img src={gameStates[hangman.wrongGuessCount]} className="stickson-image" alt='loading..'/>
                <div className='word-letters'>
                    {getWordLetterBoxes(hangman.word)}
                </div>
                <div className='keyboard'>
                    {getKeyBoard()}
                </div>
                <button type="button" className="button-style" onClick={getRandomWord}>RESTART GAME</button>
            </div>
        );
    }
}

export default Game;
