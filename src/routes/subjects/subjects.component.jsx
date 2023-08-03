import SubjectCoverCard from "../../components/subject-cover-card/subject-cover-card.component"

const subjectList = [
    {name: 'History', color: '#bf8040'},
    {name: 'Geography', color: '#39ac39'}
]

export default function Subjects() {
    return (
        <div className="subjects d-grid gap-3 px-3 px-sm-4 py-4">
            {subjectList.map(({name, color}, idx) => (
                <SubjectCoverCard name={name} color={color} key={idx} />
            ))}
        </div>
    )
}