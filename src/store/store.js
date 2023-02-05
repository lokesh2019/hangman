import { configureStore } from "@reduxjs/toolkit";
import hangmanReducer from "./hangman";

/* Export the state */
export default configureStore({
  reducer: {
    hangman: hangmanReducer,
  }
});
