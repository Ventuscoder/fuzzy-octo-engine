import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { fetchSubjectStart } from "../../store/flashcards/flashcard.action"
import { selectChapters } from "../../store/flashcards/flashcard.selector"

import ChapterCoverCard from "../chapter-cover-card/chapter-cover-card.component"

const btnTypeList = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-info', 'btn-dark']

export default function ChapterPreview() {
    const { subject } = useParams()
    const dispatch = useDispatch()
    const chapters = useSelector(selectChapters(subject))

    useEffect(() => {
        dispatch(fetchSubjectStart(subject))
    }, [])

    return (
        <div className="chapters d-grid gap-3 px-3 px-sm-4 py-4">
            {chapters.map((chapter, idx) => (
                <ChapterCoverCard subject={subject} chapter={chapter} color={btnTypeList[idx%btnTypeList.length]} key={idx} />
            ))}
        </div>
    )
}