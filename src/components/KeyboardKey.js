import { useSelector, useDispatch } from "react-redux";
import { checkLetter, checkGameState } from "../store/hangman";

import "../styles/KeyboardKey.css"

/* Component to represent each key in the on-screen keyboard. */
function KeyboardKey(props){
    const dispatch = useDispatch();
    const hangman = useSelector((state) => state.hangman);

    const onKeyClick = (e) => {
        /* User clicked a key. Update game state whether it was a correct guess or not. */
        dispatch(checkLetter(e.target.innerHTML));
        /* Check if the game is won or lost or still in play. */
        dispatch(checkGameState());
    }

    /* Once a key is clicked, style it differntly so the player knows they have already guessed that key. */
    if (hangman.guessedLetters.includes(props.alphabet)) {
        return (<div className="key-guessed key-background">{props.alphabet}</div>);
    } else {
        return (<div className="key-not-guessed key-background" onClick={onKeyClick}>{props.alphabet}</div>);
    }
}

export default KeyboardKey;
