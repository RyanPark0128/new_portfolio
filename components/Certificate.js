const Certificate = () => {

  const items = [{
    name: "AWS EC2 Master Class",
    src: "",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "AWS Serverless APIs (Lambda, DynamoDB)",
    src: "",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "CSS Animations Transitions and Transform",
    src: "",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "CSS Complete Guide",
    src: "",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "Modern React & Redux",
    src: "",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "Senior Developer Roadmap",
    src: "",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "Typescript",
    src: "",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "Typescript & React",
    src: "",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  },]
  const listItems = items.map((item) =>
    <div className="certificate__wrapper">
      <img className="certificate__image" draggable="false" src={item.logo} />
      <div className="certificate__title"><u>{item.name}</u></div>
    </div>
  )
  return <section class="certificate section" id="certificate">
    <span class="section-subtitle">What I Acheived</span>
    <h2 class="section-title">My Certificates</h2>
    <div class="certificate__container">
      <div>

        {listItems}
      </div>
    </div>
  </section>
}

export default Certificate