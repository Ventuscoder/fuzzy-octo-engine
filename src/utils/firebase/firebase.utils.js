import { initializeApp } from "firebase/app"
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB7qUzaHMmgQ8H07SRIs1nvW1V1N1qSS1w",
  authDomain: "fuzzy-octo-engine.firebaseapp.com",
  projectId: "fuzzy-octo-engine",
  storageBucket: "fuzzy-octo-engine.appspot.com",
  messagingSenderId: "554880478100",
  appId: "1:554880478100:web:1d770d65e3d775b0817d81"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore()

export async function uploadFlashcards(flashcards) {

  const subjects = Object.keys(flashcards)

  for (let i = 0; i < subjects.length; i++) {
    const batch = writeBatch(db)
    const collectionRef = collection(db, subjects[i])

    const chapters = Object.keys(flashcards[subjects[i]].chapters)

    for (let j = 0; j < chapters.length; j++) {
      const docRef = doc(collectionRef, chapters[j])
      batch.set(docRef, {data: flashcards[subjects[i]]['chapters'][chapters[j]]})
    }

    await batch.commit()
    console.log('done')
  }
}