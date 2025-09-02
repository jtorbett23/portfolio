import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import useLocalStorage from "use-local-storage";

import {page, section1, section2, header, content, themeLabel} from "../styles/home.module.css"
import data from '../data.json'
import AvatarCard from "../components/avatar-card"
import InfoCard from "../components/info-card"
import TechStackCard from "../components/techstack-card"
import ProjectsCard from "../components/projects-card"
import ArticlesCard from "../components/articles-card"
// import IntroCard from "../components/intro-card"

const IndexPage: React.FC<PageProps> = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [theme, setTheme] = useLocalStorage("theme", preference);

  return (
    <main className={page} data-theme={theme}>
      <header className={header}>
        <label className={themeLabel}>Theme:</label>
        <select name="theme" id="theme" defaultValue={theme} onChange={e => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </header>
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
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Portfolio</title>
