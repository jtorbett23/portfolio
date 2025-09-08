import React from "react"
import {section1, section2, content} from "../../styles/standard.module.css"
import data from '../../data.json'
import AvatarCard from "./avatar-card"
import InfoCard from "./info-card"
import TechStackCard from "./techstack-card"
import ProjectsCard from "./projects-card"
import ArticlesCard from "./articles-card"

const Standard = () => {
  return (
    <section className={content}>
      <section className={section1}>
        <AvatarCard/>
        <InfoCard infos={data.information}/>
        <TechStackCard techs={data.technologies}/>
      </section>
      <section className={section2}>
        <ProjectsCard projects={data.projects}/>
        <ArticlesCard articles={data.articles}/>
      </section>
    </section>
  )
}

export default Standard