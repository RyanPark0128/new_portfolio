import { career, info } from '../lib/index'

const About = () => {
  const detailInfo = career.map((detail, index) =>
    <div key={index} className="about__information-data">
      <i className={detail.logo}></i>
      <div>
        <span className="about__information-subtitle">{detail.line}</span>
        <span className="about__information-subtitle">{detail.line2}</span>
      </div>
    </div>
  )
  const listInfo = info.map((info, index) =>
    <div key={index} className="about__information-data">
      <i className={info.logo}></i>
      <span>{info.data}</span>
    </div>
  )
  return <section className="about section" id="about">
    <span className="section-subtitle">intro</span>
    <h2 className="section-title">About Me</h2>
    <div className="about__container bd-grid">
      <div className="about__data">
        <img src="assets/img/about.png" alt="" className="about__img" />
        {/* <p className="about__description"> {intro}</p> */}
      </div>
      <div>
        <div className="about__information">
          <h3 className="about__information-title">Information</h3>
          {listInfo}
        </div>
        <div className="about__information">
          <h3 className="about__information-title">Experience</h3>
          {detailInfo}
        </div>
      </div>
    </div>
  </section>
}

export default About