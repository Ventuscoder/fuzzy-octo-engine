import { useNavigate } from "react-router-dom"

export default function SubjectCoverCard({ subject, color }) {
    const navigate = useNavigate()

    function subjectClickHandler() {
        navigate(`/subjects/${subject}`)
    }

    return (
        <button className="subject-cover-card btn col-sm-4 py-2 fw-bold" style={{backgroundColor: color, color: 'white'}} onClick={subjectClickHandler}>
            {subject}
        </button>
    )
}