import Navbar from "./components/Navbar"
import Hero from "./section/Hero"
import About from "./section/About"
import Project from "./section/Project"
import Testimonials from "./section/Testimonials"
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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
