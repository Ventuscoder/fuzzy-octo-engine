import { Route, Routes } from "react-router-dom"

import Navigation from "./routes/navigation/navigation.component"
import Home from "./routes/home/home.component"
import Subjects from "./routes/subjects/subjects.component"

function App() {



  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="subjects/*" element={<Subjects />} />
      </Route>
    </Routes>
  )
}

export default App
