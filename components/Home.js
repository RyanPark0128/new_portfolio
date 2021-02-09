import ScrollAnimation from 'react-animate-on-scroll';


const Home = () => {
  return <section class="home" id="home">
    <div class="home__container bd-grid">
      <div class="home__data">
        <ScrollAnimation animateIn="bounce">
          <h1 class="home__title">Ryan Park</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={1000}>
          <span class="home__profession">Fullstack Developer</span>
          <div class="home__social">
            <a href="https://linkedin.com/in/ryan-park-552aa9190" target="_blank" class="home__social-link"><i class='bx bxl-linkedin'></i></a>
            <a href="https://github.com/RyanPark0128" target="_blank" class="home__social-link"><i class='bx bxl-github'></i></a>
          </div>

          <a href="assets/img/Resume.pdf" class="button home__button">Download Resume</a>
        </ScrollAnimation>
      </div>
    </div>
  </section>
}

export default Home