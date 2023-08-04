import { takeLatest, all, call, put } from "redux-saga/effects"

import { getFlashcards } from "../../utils/firebase/firebase.utils"

import { flashcardActionTypes } from "./flashcard.types"
import { fetchSubjectFailed, fetchSubjectSuccess } from "./flashcard.action"

export function* fetchSubjectAsync({ payload }) {
    try {
        const subjectFlashcards = yield call(getFlashcards, payload)
        yield put(fetchSubjectSuccess(payload, subjectFlashcards))
    } catch (error) {
        yield put(fetchSubjectFailed(error))
    }
}

export function* onFetchSubject() {
    yield takeLatest(flashcardActionTypes.fetchSubjectStart, fetchSubjectAsync)
}

export function* flashcardsSaga() {
    yield all([call(onFetchSubject)])
}