const Certificate = () => {

  const items = [{
    name: "Lighthouse Labs Web Development",
    src: "./assets/certificate/Lighthouse.pdf",
    logo: "https://www.lighthouselabs.ca/assets/lighthouselabs-logo-d5df6d383f7466b06a64de9561fd537493502eafe78bbf3bcd3de82884e5dd85.png"
  }, {
    name: "AWS EC2 Master Class",
    src: "./assets/certificate/MasterClass.pdf",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "AWS Serverless APIs (Lambda, DynamoDB)",
    src: "./assets/certificate/Serverless.pdf",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "CSS Animations Transitions and Transform",
    src: "./assets/certificate/Animation.pdf",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "CSS Complete Guide",
    src: "./assets/certificate/Css.pdf",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "Modern React & Redux",
    src: "./assets/certificate/Modern.pdf",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "Senior Developer Roadmap",
    src: "./assets/certificate/Senior.pdf",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "Typescript",
    src: "./assets/certificate/Typescript.pdf",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  }, {
    name: "Typescript & React",
    src: "./assets/certificate/TypeReact.pdf",
    logo: "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
  },]

  const listItems = items.map((item) =>
    <div className="certificate__wrapper">
      <img className="certificate__image" draggable="false" src={item.logo} />
      <div className="certificate__title"><u><a href={item.src}>{item.name}</a></u></div>
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