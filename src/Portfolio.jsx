import React from 'react'
import Articles from './Containers/Articles/Articles'
import Intro from './Containers/Intro/Intro'
import Projects from './Containers/Projects/Projects'
import Info from './Containers/Info/Info'
import data from './data.json'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <div className="site-container">
        
        <div className="page-container">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="content-container">
                <div className="sidebar">
                    <Info info={data.information} imagesPath="src/images/"/>
                </div>
                <div className="main-section">
                    <Intro text={data.introText.join('\n')} />
                    <Projects projects={data.projects}/>
                    <Articles articles={data.articles}/>
                </div>
            </div>
            </div>
        </div>
    )
}
