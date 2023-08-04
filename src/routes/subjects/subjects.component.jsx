import { Routes, Route } from "react-router-dom"
import SubjectPreview from "../../components/subject-preview/subject-preview.component"
import ChapterPreview from "../../components/chapter-preview/chapter-preview.component"

export default function Subjects() {
    return (
        <Routes>
            <Route index element={<SubjectPreview />} />
            <Route path=":chapter" element={<ChapterPreview />} />
        </Routes>
    )
}