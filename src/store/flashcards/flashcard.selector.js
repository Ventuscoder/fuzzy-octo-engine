import { createSelector } from "reselect"

import { convertChapterToText } from "../../utils/firebase/firebase.utils"

const selectFlashcards = (state) => state.flashcards.flashcards

export function selectChapters(subject) {
    return createSelector([selectFlashcards],
        (flashcards) => {
            const subjectChapters = flashcards[subject]
            return Object.keys(subjectChapters).map(chapter => convertChapterToText(chapter))
    })
}