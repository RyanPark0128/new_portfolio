const Header = () => {
  return <header className="l-header">
    <nav className="nav bd-grid">
      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-menu"></i>
      </div>

      <div>
        <a href="#" className="nav__logo">Ryan</a>
      </div>

      <div className="nav__menu" id="nav-menu">
        <div className="nav__close" id="nav-close">
          <i className='bx bx-x'></i>
        </div>
        <ul className="nav__list">
          <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
          <li className="nav__item"><a href="#skills" className="nav__link">Skill</a></li>
          <li className="nav__item"><a href="#education" className="nav__link">Education</a></li>
          <li className="nav__item"><a href="#certificate" className="nav__link">Certificate</a></li>
          <li className="nav__item"><a href="#works" className="nav__link">Work</a></li>
        </ul>
      </div>
    </nav>
  </header>
}

export default Header