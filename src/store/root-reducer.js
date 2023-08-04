import { combineReducers } from "redux"

import { flashcardsReducer } from "./flashcards/flashcard.reducer"

export const rootReducer = combineReducers({
    flashcards: flashcardsReducer
})