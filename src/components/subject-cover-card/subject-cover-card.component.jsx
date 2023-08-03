

export default function SubjectCoverCard({ name, color }) {
    return (
        <button className="subject-cover-card btn col-sm-4 py-2 fw-bold" style={{backgroundColor: color}}>
            {name}
        </button>
    )
}