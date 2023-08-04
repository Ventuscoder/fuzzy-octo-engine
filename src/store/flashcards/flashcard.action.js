import { createAction } from "../../utils/reducer/reducer.utils"
import { flashcardActionTypes } from "./flashcard.types"

export function fetchSubjectStart(subject) {
    return createAction(flashcardActionTypes.fetchSubjectStart, subject)
}

export function fetchSubjectSuccess(subject, subjectFlashcards) {
    return createAction(flashcardActionTypes.fetchSubjectSuccess, {subject, subjectFlashcards})
}

export function fetchSubjectFailed(error) {
    return createAction(flashcardActionTypes.fetchSubjectFailed, error)
}