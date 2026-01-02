import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
    </div>
  )
}

export default Home
