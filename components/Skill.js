const Skill = () => {
  return <section class="skills section" id="skills">
    <span class="section-subtitle">Why Choose Me</span>
    <h2 class="section-title">My Expertise</h2>

    <div class="skills__container bd-grid">
      <div class="skills__content">
        <h3 class="skills__subtitle">Frontend</h3>

        <div class="skills__data">
          <span class="skills__name">HTML/CSS</span>
          <span class="skills__number">80%</span>
          <span class="skills__bar skills__html"></span>
        </div>

        <div class="skills__data">
          <span class="skills__name">Javascript</span>
          <span class="skills__number">90%</span>
          <span class="skills__bar skills__js"></span>
        </div>

        <div class="skills__data">
          <span class="skills__name">React</span>
          <span class="skills__number">80%</span>
          <span class="skills__bar skills__react"></span>
        </div>
      </div>

      <div class="skills__content">
        <h3 class="skills__subtitle">Backend & Database</h3>

        <div class="skills__data">
          <span class="skills__name">PHP</span>
          <span class="skills__number">60%</span>
          <span class="skills__bar skills__php"></span>
        </div>

        <div class="skills__data">
          <span class="skills__name">Node JS & Express</span>
          <span class="skills__number">90%</span>
          <span class="skills__bar skills__node"></span>
        </div>

        <div class="skills__data">
          <span class="skills__name">Firebase</span>
          <span class="skills__number">70%</span>
          <span class="skills__bar skills__firebase"></span>
        </div>

        <div class="skills__data">
          <span class="skills__name">PostgreSQL</span>
          <span class="skills__number">80%</span>
          <span class="skills__bar skills__python"></span>
        </div>
      </div>

    </div>
  </section>
}

export default Skill