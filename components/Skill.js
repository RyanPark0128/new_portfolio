import { skills } from '../lib/index'

const Skill = () => {
  const listItems = skills.map((item) =>
    <div key={item.title} className="skills__content">
      <h3 className="skills__subtitle">{item.title}</h3>
      {item.content.map((subItem) => <div key={subItem.name} className="skills__data">
        <span className="skills__name">{subItem.name}</span>
        <span className={`skills__bar skills${subItem.className}`}></span>
      </div>)}
    </div>
  )

  return <section className="skills section" id="skills">
    <span className="section-subtitle">proficiency on each skills</span>
    <h2 className="section-title">My Expertise</h2>
    <div className="skills__container bd-grid">
      {listItems}
    </div>
  </section>
}

export default Skill