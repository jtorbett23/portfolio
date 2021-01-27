import React from 'react'
import Intro from './Containers/Intro/Intro'
import Projects from './Containers/Projects/Projects'
import data from './data.json'

export default function Portfolio() {
    return (
        <div>
            Portfolio
            <Intro text={data.introText.join('\n')} />
            <Projects projects={data.projects}/>
        </div>
    )
}
