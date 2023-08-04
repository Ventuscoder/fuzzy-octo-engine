import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

import { fetchSubjectStart } from "../../store/flashcards/flashcard.action"

export default function ChapterPreview() {
    const { subject } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSubjectStart(subject))
    }, [])

    return (
        <h1>{subject}</h1>
    )
}