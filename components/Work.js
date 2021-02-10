import { works } from '../lib/index'
const Work = () => {
  const workList = works.map((item) =>
    <div className="works__img">
      <img src={item.image_link} alt="" />
      <div className="works__data">
        <div>
          <a href={item.demo_link} target="_blank" className="works__link"><i className="bx bx-globe"></i></a>
          <a href={item.github_link} target="_blank" className="works__link"><i className='bx bxl-github'></i></a>
        </div>
        <span className="works__title">{item.name}</span>
      </div>
    </div>
  )
  return <section className="works section" id="works">
    <span className="section-subtitle">My portfolio</span>
    <h2 className="section-title">Recent Works</h2>
    <div className="works__container bd-grid">
      {workList}
    </div>
  </section>
}

export default Work