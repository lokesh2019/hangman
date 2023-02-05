import "../styles/LetterBox.css"

/* Component to display text box for each letter of the random word.
The Game component sends a prop to either reveal the mystery letter or 
a '?' if the user hasn't guessed the letter yet. */
function LetterBox(props){
    return (<div className="text-box">{props.letter}</div>);
}

export default LetterBox;
