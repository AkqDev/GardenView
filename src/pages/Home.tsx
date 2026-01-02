import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Reviews/>
    </div>
  )
}

export default Home
