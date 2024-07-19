import { useState } from 'react'

import "./index.css"

const Editor = ({ resume, updateData }) => {
    console.log(resume)
    return (
        <div className="editor">
            <form action="/" method="">
                <div className="about-me">
                    <p>About me</p>
                    <input onChange={(e) => updateData("email", e.target.value)} type="text" name="fullname" id="fullname" placeholder='Full Name'/>
                </div>
            </form>
        </div>
    )
}

const DisplayPdf = ({ resume }) => {
    return (
        <div className="display-pdf">
            <div className="a4-size">
                <div className="resume resume-header">
                    <div className="fullname">{`${resume.fullName}`}</div>
                    <div className="info">
                    {resume.email} ❖ {resume.phone} ❖ {resume.location} ❖ {resume.link}
                        {/* <div className="email">{resume.email}</div>
                        <div className="phone">❖ {resume.phone}</div>
                        <div className="location">❖ {resume.location}</div>
                        <div className="link">❖ {resume.link}</div> */}
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

const MainBody = () => {
    let resumeObject = {
        fullName: "John McJobFace",
        email: "Johnmcjb@example.com",
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