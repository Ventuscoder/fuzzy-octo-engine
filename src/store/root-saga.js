import { all,call } from 'redux-saga/effects'

import { flashcardsSaga } from './flashcards/flashcard.saga'

export function* rootSaga() {
    yield all([call(flashcardsSaga)])
}