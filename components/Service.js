import { services } from '../lib/index'


const Service = () => {
  const serviceList = services.map((item, index) =>
    <div key={index} className="services__content">
      <i className={item.logo}></i>
      <h3 className="services__title">{item.name}</h3>
    </div>
  )
  return <section className="services section" id="services">
    <span className="section-subtitle">What I Offer</span>
    <h2 className="section-title">My Services</h2>

    <div className="services__container bd-grid">
      {serviceList}
    </div>
  </section>
}

export default Service