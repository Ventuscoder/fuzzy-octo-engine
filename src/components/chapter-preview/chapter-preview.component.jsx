import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { fetchSubjectStart } from "../../store/flashcards/flashcard.action"
import { selectChapters } from "../../store/flashcards/flashcard.selector"

export default function ChapterPreview() {
    const { subject } = useParams()
    const dispatch = useDispatch()
    const chapters = useSelector(selectChapters(subject))

    useEffect(() => {
        dispatch(fetchSubjectStart(subject))
    }, [])

    return (
        <h1>{subject}</h1>
    )
}