import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {page, section1, section2} from "../styles/home.module.css"
import AvatarCard from "../components/avatar-card"
import InfoCard from "../components/info-card"
import data from '../data.json'
import TechStackCard from "../components/techstack-card"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={page}>
    <section className={section1}>
      Section 1
      <AvatarCard/>
      <InfoCard infos={data.information}/>
      <TechStackCard techs={data.technologies}/>
    </section>
    <section className={section2}>
      Section 2
    </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
