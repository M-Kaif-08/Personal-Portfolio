import Navbar from "./components/Navbar"
import Hero from "./section/Hero"
import About from "./section/About"
import Project from "./section/Project"
import Contact from "./section/Contact"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
