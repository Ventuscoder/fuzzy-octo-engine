import { useEffect } from "react"
import { Routes, Route, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

import ChapterPreview from "../../components/chapters-preview/chapters-preview.component"

import { fetchSubjectStart } from "../../store/flashcards/flashcard.action"

export default function Chapters() {
    const { subject } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSubjectStart(subject))
    }, [])

    return (
        <Routes>
            <Route index element={<ChapterPreview />} />
            <Route path=':chapter' element />
        </Routes>
    )
}