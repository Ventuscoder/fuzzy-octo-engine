import { useNavigate } from "react-router-dom"

export default function ChapterCoverCard({ subject, chapter, color }) {
    const navigate = useNavigate()

    function chapterClickHandler() {
        navigate(`/subjects/${subject}/${chapter}`)
    }

    return (
        <button className={"chapter-cover-card btn col-sm-4 py-2 fw-bold "+color} onClick={chapterClickHandler}>
            {chapter}
        </button>
    )
}