import SubjectCoverCard from "../subject-cover-card/subject-cover-card.component"

const subjectList = [
    {name: 'History', color: '#8a5e25'},
    {name: 'Geography', color: '#1d941b'}
]

export default function SubjectsPreview() {
    return (
        <div className="subjects d-grid gap-3 px-3 px-sm-4 py-4">
            {subjectList.map(({name, color}, idx) => (
                <SubjectCoverCard subject={name} color={color} key={idx} />
            ))}
        </div>
    )
}