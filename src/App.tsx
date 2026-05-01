import './App.css'
import Navbar from './components/navbar'
import AboutMe from './components/aboutme'
import ExperiencesContainer from './components/experiencesContainer'
import Skills from './components/skills'
import Footer from './components/footer'

export default function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <ExperiencesContainer />
      <Skills />
      <Footer />
    </>
  )
};
