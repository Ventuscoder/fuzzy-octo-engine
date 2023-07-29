
import { useEffect } from "react"
import {data} from "./data"
import { uploadFlashcards } from "./utils/firebase/firebase.utils"

function App() {
  useEffect(() => {
    uploadFlashcards(data)
  }, [])

  return (
    <div className="App">
    
    </div>
  )
}

export default App
