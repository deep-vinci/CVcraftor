import { useState } from 'react'

import "./index.css"

const Editor = ({ resume, updateData }) => {
    console.log(resume)
    return (
        <div className="editor">
            <form action="/" method="">
                <div className="about-me">
                    <p>About me</p>
                    <input onChange={(e) => updateData(resume.workExperience[0].jobTitle, e.target.value)} type="text" name="fullname" id="fullname" placeholder='Full Name'/>
                </div>
            </form>
        </div>
    )
}

const DisplayPdf = () => {
    return (
        <div className="display-pdf">

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
        workExperience: [
            {
                companyName: "Company 1",
                jobTitle: "CEO",
                location: "Salt Lake",
                duration: "Oct 2020 - Present"
            }
        ]
    }
    let [resume, setResume] = useState(resumeObject);

    const updateData = (key, d) => {
        let tmpObj = {
            ...resumeObject, workExperience[0].jobTitle: d
        }
        setResume(tmpObj)
    }

    return (
        <div className="main-body">
            <Editor resume={resume} updateData={updateData}/>
            <DisplayPdf />
        </div>
    )
}

export default MainBody;