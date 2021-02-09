const Skill = () => {

  const skills = [{
    title: "Frontend",
    content: [{
      name: "HTML/CSS", percentage: 80, className: '__80'
    },
    {
      name: "Javascript", percentage: 90, className: '__90'
    },
    {
      name: "React", percentage: 90, className: '__90'
    }
    ]
  },
  {
    title: "Backend",
    content: [{
      name: "PHP", percentage: 70, className: '__70'
    },
    {
      name: "Node JS & Express", percentage: 90, className: '__90'
    },
    {
      name: "Firebase", percentage: 70, className: '__70'
    }
    ]
  },
  {
    title: "Database",
    content: [{
      name: "PostgreSQL", percentage: 90, className: '__90'
    },
    {
      name: "DynamoDB", percentage: 60, className: '__60'
    },
    {
      name: "Firestore", percentage: 60, className: '__60'
    }
    ]
  },
  {
    title: "Cloud & Deployment",
    content: [{
      name: "AWS (Lambda, EC2)", percentage: 85, className: '__85'
    },
    {
      name: "AWS (Cloudfront, S3)", percentage: 85, className: '__85'
    },
    {
      name: "Heroku", percentage: 80, className: '__80'
    }
    ]
  },
  {
    title: "Mobile",
    content: [{
      name: "React Native", percentage: 70, className: '__70'
    },
    {
      name: "Swift", percentage: 70, className: '__70'
    },
    ]
  },
  {
    title: "Design",
    content: [{
      name: "Figma", percentage: 80, className: '__80'
    },
    ]
  }
  ]

  const listItems = skills.map((item) =>
    <div class="skills__content">
      <h3 class="skills__subtitle">{item.title}</h3>
      {item.content.map((subItem) => <div class="skills__data">
        <span class="skills__name">{subItem.name}</span>
        <span class="skills__number">{subItem.percentage}%</span>
        <span class={`skills__bar skills${subItem.className}`}></span>
      </div>)}
    </div>
  )

  return <section class="skills section" id="skills">
    <span class="section-subtitle">Why Choose Me</span>
    <h2 class="section-title">My Expertise</h2>
    <div class="skills__container bd-grid">

      {listItems}
      {/* <div class="skills__content">
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
        <h3 class="skills__subtitle">Backend</h3>
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
      </div> */}
    </div>
  </section>
}

export default Skill