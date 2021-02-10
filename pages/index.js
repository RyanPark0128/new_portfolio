import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Skill from '../components/Skill'
import Education from '../components/Education'
import Work from '../components/Work'
import Service from '../components/Service'
import Footer from '../components/Footer'
import Certificate from '../components/Certificate'
import ScrollAnimation from 'react-animate-on-scroll';
import Scroll from '../lib/scroll'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    Scroll()
  }, [])

  return (
    <div>
      <Header />
      <div className="l-main">
        <Home />
        <ScrollAnimation animateIn="fadeIn">
          <About />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Skill />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Education />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Certificate />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Service />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Work />
        </ScrollAnimation>
      </div>
      <Footer />
    </div>
  )
}
