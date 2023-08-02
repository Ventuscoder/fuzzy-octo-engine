

export default function SubjectCoverCard({ name, color }) {
    return (
        <div className="subject-cover-card" style={{backgroundColor: color}}>
            {name}
        </div>
    )
}