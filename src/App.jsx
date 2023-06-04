import Header from './components/Header/Header'
import Home from './components/pages/home/home'
import About from './components/pages/about-me/about-me'
import Projects from './components/pages/projects/projects'
import Services from './components/pages/services/services'
import Skills from './components/pages/skills/skills'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Services/>
      <Skills/>
      <Footer />
    </div>
  )
}

export default App
