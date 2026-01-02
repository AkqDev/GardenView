import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Reviews/>
      <Contact/>
    </div>
  )
}

export default Home
