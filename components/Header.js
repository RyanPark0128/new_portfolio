import { useState } from 'react'

const Header = () => {
  const [active, setActive] = useState(false)
  return <header class="l-header">
    <nav class="nav bd-grid">
      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-menu"></i>
      </div>

      <div>
        <a href="#" class="nav__logo">Ryan</a>
      </div>

      <div class="nav__menu" id="nav-menu">
        <div class="nav__close" id="nav-close">
          <i class='bx bx-x'></i>
        </div>
        <ul class="nav__list">
          <li class="nav__item"><a href="#home" className="nav__link">Home</a></li>
          <li class="nav__item"><a href="#about" className="nav__link">About</a></li>
          <li class="nav__item"><a href="#skills" className="nav__link">Skill</a></li>
          <li class="nav__item"><a href="#education" className="nav__link">Education</a></li>
          <li class="nav__item"><a href="#certificate" className="nav__link">Certificate</a></li>
          <li class="nav__item"><a href="#services" className="nav__link">Service</a></li>
          <li class="nav__item"><a href="#works" className="nav__link">Work</a></li>
        </ul>
      </div>
    </nav>
  </header>
}

export default Header