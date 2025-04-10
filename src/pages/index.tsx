import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {page, section1, section2} from "../styles/home.module.css"
import AvatarCard from "../components/avatar-card"
import InfoCard from "../components/info-card"
import data from '../data.json'
import TechStackCard from "../components/techstack-card"
import ProjectsCard from "../components/projects-card"
import ArticlesCard from "../components/articles-card"
import IntroCard from "../components/intro-card"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={page}>
    <section className={section1}>
      <AvatarCard/>
      <InfoCard infos={data.information}/>
      <TechStackCard techs={data.technologies}/>
    </section>
    <section className={section2}>
      <ProjectsCard projects={data.projects}/>
      <ArticlesCard articles={data.articles}/>
    </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfolio</title>
