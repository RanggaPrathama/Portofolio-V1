import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Portfolio from "./components/portfolio"

const App = () => {
  
  return (
    <div className="relative z-0 bg-primary ">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern ">
      <Navbar />
      <Hero />
      </div>
      <About />
      <Portfolio />
    </div>
  )
}

export default App
