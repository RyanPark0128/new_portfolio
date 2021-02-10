import { items } from '../lib/index'

const Certificate = () => {
  const listItems = items.map((item) =>
    <div key={item.name} className="certificate__wrapper">
      <img className="certificate__image" draggable="false" src={item.logo} />
      <div className="certificate__title"><u><a href={item.src}>{item.name}</a></u></div>
    </div>
  )
  return <section className="certificate section" id="certificate">
    <span className="section-subtitle">What I Acheived</span>
    <h2 className="section-title">My Certificates</h2>
    <div className="certificate__container">
      <div>
        {listItems}
      </div>
    </div>
  </section>
}

export default Certificate