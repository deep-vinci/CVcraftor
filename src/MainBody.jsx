import { useState } from 'react'

import "./index.css"

const Editor = ({ resume, updateData }) => {
    console.log(resume)
    return (
        <div className="editor">
            <form action="/" method="">
                <div className="about-me">
                    <p>About me</p>
                    <input onChange={(e) => updateData("fullName", e.target.value)} type="text" name="fullname" id="fullname" placeholder='Full Name'/>
                </div>
            </form>
        </div>
    )
}

const DisplayPdf = (props) => {
    return (
        <div className="display-pdf">
            {JSON.stringify(props.resume)}
        </div>
    )
}

const MainBody = () => {
    let resumeObject = {
        fullName: "John Doe",
        email: "johndoe@example.com",
        phone: "247 324-3428",
        location: "Salt Lake",
        link: "Github",
    }
    let [resume, setResume] = useState(resumeObject);

    const updateData = (key, property) => {
        let tmpObj = {
            ...resumeObject, [key]: property
        }
        setResume(tmpObj)
    }

    return (
        <div className="main-body">
            <Editor resume={resume} updateData={updateData}/>
            <DisplayPdf resume={resume} />
        </div>
    )
}

export default MainBody;