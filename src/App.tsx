// import Nav from './components/Nav'  // top nav + floating pill — kept for reference
import SideNav from './components/SideNav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import BackgroundFX from './components/BackgroundFX'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <BackgroundFX />
      {/* <Nav /> */}
      <SideNav />
      <main className={styles.main}>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
