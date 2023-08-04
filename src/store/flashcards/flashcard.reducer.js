import { flashcardActionTypes } from "./flashcard.types"

const flashcardsInitialState = {
    flashcards: {},
    isLoading: false,
    error: null
}

export function flashcardsReducer(state = flashcardsInitialState, action = {}) {
    const { type, payload } = action

    switch (type) {
        case flashcardActionTypes.fetchSubjectStart:
            return {
                ...state, isLoading: true
            }
        case flashcardActionTypes.fetchSubjectSuccess:
            return {
                ...state,
                flashcards: {
                    ...state.flashcards,
                    [payload.subject]: payload.subjectFlashcards[0].data
                },
                isLoading: false
            }
        case flashcardActionTypes.fetchSubjectFailed:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }
}