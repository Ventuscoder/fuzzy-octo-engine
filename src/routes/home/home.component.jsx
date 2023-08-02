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
            <div className="content-container w-100 px-4 py-5">
                <div className="title-container">
                    <TypeAnimation sequence={typeSequence} wrapper="h2" preRenderFirstString repeat={Infinity} />
                </div>
                <div className="nav-btn-group">
                    <button className="btn btn-primary p-2 mt-4 lh-lg">Start studying now <i className="gg-arrow-top-right-r"></i></button>
                </div>
            </div>
        </div>
    )
}