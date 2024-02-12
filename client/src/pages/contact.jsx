import React from 'react'
import resume from '../assets/test.txt'

function contact() {
    return (
        <>
            <div>
                <a href={resume} download>Click to download</a>
            </div>
        </>
    )
}

export default contact