const Education = () => {

  return <section class="education section" id="education">
    <span class="section-subtitle">Qualification</span>
    <h2 class="section-title">My Education</h2>
    <div class="education__container bd-grid">
      <div class="education__content">
        <div>
          <h3 class="education__year">2016- 2018</h3>
          <span class="education__university">Douglas College</span>
        </div>
        <div class="education__time">
          <span class="education__rounder"></span>
          <span class="education__line"></span>
        </div>
        <div>
          <h3 class="education__race">Associate of Science</h3>
          <span class="education__specialty">Diploma</span>
        </div>
      </div>
      <div class="education__content">
        <div>
          <h3 class="education__year">2019</h3>
          <span class="education__university">Lighthouse Labs</span>
        </div>
        <div class="education__time">
          <span class="education__rounder"></span>
          <span class="education__line"></span>
        </div>
        <div>
          <h3 class="education__race">Web Development</h3>
          <span class="education__specialty">Diploma</span>
        </div>
      </div>
    </div>
  </section>
}

export default Education