import { useNavigate } from "react-router-dom"

export default function SubjectCoverCard({ name, color }) {
    const navigate = useNavigate()

    function subjectClickHandler() {
        navigate(`/subjects/${name}`)
    }

    return (
        <button className="subject-cover-card btn col-sm-4 py-2 fw-bold" style={{backgroundColor: color}} onClick={subjectClickHandler}>
            {name}
        </button>
    )
}