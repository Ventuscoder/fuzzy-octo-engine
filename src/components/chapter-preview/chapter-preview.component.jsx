import { useParams } from "react-router-dom"

export default function ChapterPreview() {
    const { chapter } = useParams()

    return (
        <h1>{chapter}</h1>
    )
}