import { useState } from 'react'

import "./index.css"

const Editor = () => {
    return (
        <div className="editor">

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

    return (
        <div className="main-body">
            <Editor />
            <DisplayPdf />
        </div>
    )
}

export default MainBody;