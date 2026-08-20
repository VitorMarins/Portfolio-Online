import './App.css'
import Navbar from './components/navbar'
import AboutMe from './components/aboutme'
import Education from './components/education'
import ExperiencesContainer from './components/experiencesContainer'
import Skills from './components/skills'
import Footer from './components/footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-14">
        <AboutMe />
        <Education />
        <ExperiencesContainer />
        <Skills />
        <Footer />
      </main>
    </>
  )
};
