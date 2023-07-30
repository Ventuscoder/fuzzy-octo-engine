import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"

const typeSequence = [
    'Study for 9th grade CBSE: History',
    1000,
    'Study for 9th grade CBSE: Biology',
    1000,
    'Study for 9th grade CBSE: Geography',
    1000,
    'Study for 9th grade CBSE: Civics',
    1000,
    'Study for 9th grade CBSE: Economics',
    1000
]

export default function Home() {

    return (
        <div className="home">
            <TypeAnimation sequence={typeSequence} wrapper="h2" preRenderFirstString repeat={Infinity} />
        </div>
    )
}