import React from 'react'
import { TagCloud } from 'react-tagcloud'

function Tagcloud() {
    const data = [
        { value: 'Springboot', count: 100 },
        { value: 'MongoDB', count: 18 },
        { value: 'JavaScript', count: 38 },
        { value: 'React', count: 60 },
        { value: 'Express.js', count: 40 },
        { value: 'HTML5', count: 33 },
        { value: 'CSS3', count: 20 },
        { value: 'Kubernetes', count: 75 },
        { value: 'Linux', count: 80 },
        { value: 'Vue', count: 50 },
        { value: 'Git', count: 80 },
        { value: 'MySQL', count: 80 },
        { value: 'Oracle', count: 30 },
        { value: 'Azure', count: 44 },
        { value: 'Google Cloud', count: 63 },
        { value: 'Docker', count: 85 },
        { value: 'Redis', count: 5 },
        { value: 'PHP', count: 5 },
    ]

    return (
        <TagCloud
            minSize={30}
            maxSize={60}
            tags={data}
        />
    )
}

export default Tagcloud