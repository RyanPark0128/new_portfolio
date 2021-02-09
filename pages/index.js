import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Skill from '../components/Skill'
import Education from '../components/Education'
import Work from '../components/Work'
import Service from '../components/Service'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')
    toggleMenu.addEventListener('click', () => {
      navMenu.classList.toggle('show')
    })
    closeMenu.addEventListener('click', () => {
      navMenu.classList.remove('show')
    })
    const navLink = document.querySelectorAll('.nav__link')
    function linkAction() {
      navMenu.classList.remove('show')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))
    const sections = document.querySelectorAll('section[id]')
    function scrollActive() {
      const scrollY = window.pageYOffset
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
      })
    }
    window.addEventListener('scroll', scrollActive)
  }, [])

  return (
    <div>
      <Header />
      <div class="l-main">
        <Home />
        <About />
        <Skill />
        <Education />
        <Service />
        <Work />
      </div>
      <Footer />
    </div>
  )
}
