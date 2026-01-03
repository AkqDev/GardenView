import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

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
      <Footer/>
    </div>
  )
}

export default Home
