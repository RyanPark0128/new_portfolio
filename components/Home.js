import ScrollAnimation from 'react-animate-on-scroll';


const Home = () => {
  return <section className="home" id="home">
    <div className="home__container bd-grid">
      <div className="home__data">
        <ScrollAnimation animateIn="bounce">
          <h1 className="home__title">Ryan Park</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={1000}>
          <span className="home__profession">Fullstack Developer</span>
          <div className="home__social">
            <a href="https://linkedin.com/in/ryanpark0128" target="_blank" className="home__social-link"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/ryanpark0128" target="_blank" className="home__social-link"><i className='bx bxl-github'></i></a>
          </div>

          <a href="assets/img/Resume.pdf" className="button home__button">Download Resume</a>
        </ScrollAnimation>
      </div>
    </div>
  </section>
}

export default Home