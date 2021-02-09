const About = () => {
  return <section class="about section" id="about">
    <span class="section-subtitle">intro</span>
    <h2 class="section-title">About Me</h2>

    <div class="about__container bd-grid">
      <div class="about__data">
        <img src="assets/img/about.png" alt="" class="about__img" />
        <p class="about__description"> Hi I'm Ryan, and I'm experienced Web Developer adept in all stages of web development.
            Knowledgeable in user interface, testing and debugging
            processes. Equipped with a diverse and promising skill-set, and proficient in an assortment of
            technologies, including
            Javascript, React&Redux, PHP and Laravel. Able to effectively self-manage during independent
            projects, as well as collaborate
                in a team setting</p>
      </div>
      <div>
        <div class="about__information">
          <h3 class="about__information-title">Information</h3>

          <div class="about__information-data">
            <i class="bx bx-user about__information-icon"></i>
            <span>Ryan</span>
          </div>

          <div class="about__information-data">
            <i class="bx bx-phone about__information-icon"></i>
            <span>7788675265</span>
          </div>

          <div class="about__information-data">
            <i class="bx bx-envelope about__information-icon"></i>
            <span>parkryan0128@gmail.com</span>
          </div>

        </div>
        <div class="about__information">
          <h3 class="about__information-title">Experience</h3>

          <div class="about__information-data">
            <i class="bx bx-medal about__information-icon"></i>
            <div>
              <span class="about__information-subtitle">1 year of</span>
              <span class="about__information-subtitle">Experience</span>
            </div>
          </div>

          <div class="about__information-data">
            <i class="bx bx-briefcase about__information-icon"></i>
            <div>
              <span class="about__information-subtitle">More Than 20</span>
              <span class="about__information-subtitle">Projects Completed</span>
            </div>
          </div>

          <div class="about__information-data">
            <i class="bx bx-code about__information-icon"></i>
            <div>
              <span class="about__information-subtitle">Proficient In Both</span>
              <span class="about__information-subtitle">Frontend and Backend</span>
            </div>
          </div>

          <div class="about__information-data">
            <i class="bx bx-data about__information-icon"></i>
            <div>
              <span class="about__information-subtitle">Proficient In Both</span>
              <span class="about__information-subtitle">SQL and NoSQL</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
}

export default About