import { Routes, Route } from "react-router-dom"
import SubjectsPreview from "../../components/subjects-preview/subjects-preview.component"
import Chapters from "../chapters/chapters.component"

export default function Subjects() {
    return (
        <Routes>
            <Route index element={<SubjectsPreview />} />
            <Route path=":subject/*" element={<Chapters />} />
        </Routes>
    )
}