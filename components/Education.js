import { educate } from '../lib/index'

const Education = () => {
  const listEducation = educate.map((item, index) =>
    <div key={index} className="education__content">
      <div>
        <h3 className="education__year">{item.period}</h3>
        <span className="education__university">{item.institution}</span>
      </div>
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div>
        <h3 className="education__race">{item.field}</h3>
        <span className="education__specialty">{item.degree}</span>
      </div>
    </div>
  )

  return <section className="education section" id="education">
    <span className="section-subtitle">Qualification</span>
    <h2 className="section-title">My Education</h2>
    <div className="education__container bd-grid">
      {listEducation}
    </div>
  </section>
}

export default Education