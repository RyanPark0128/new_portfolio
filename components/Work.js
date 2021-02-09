const Work = () => {
  return <section class="works section" id="works">
    <span class="section-subtitle">My portfolio</span>
    <h2 class="section-title">Recent Works</h2>

    <div class="works__container bd-grid">
      <div class="works__img">
        <img src="assets/img/scheduler.jpg" alt="" />

        <div class="works__data">
          <div>
            <a href="https://brave-haibt-0822ec.netlify.app/" target="_blank" class="works__link"><i class="bx bx-globe"></i></a>
            <a href="https://github.com/RyanPark0128/scheduler" target="_blank" class="works__link"><i class='bx bxl-github'></i></a>
          </div>
          <span class="works__title">React Scheduler</span>
        </div>
      </div>

      <div class="works__img">
        <img src="assets/img/tetris.jpg" alt="" />

        <div class="works__data">
          <div>
            <a href="https://ryanpark0128.github.io/tetris-react/" target="_blank" class="works__link"><i class="bx bx-globe"></i></a>
            <a href="https://github.com/RyanPark0128/tetris-react" target="_blank" class="works__link"><i class='bx bxl-github'></i></a>
          </div>
          <span class="works__title">React Tetris</span>
        </div>
      </div>

      <div class="works__img">
        <img src="assets/img/netflix.jpg" alt="" />

        <div class="works__data">
          <div>
            <a href="https://netflix-clone-9065c.web.app/" target="_blank" class="works__link"><i class="bx bx-globe"></i></a>
            <a href="https://github.com/RyanPark0128/Netflix_Clone" target="_blank" class="works__link"><i class='bx bxl-github'></i></a>
          </div>
          <span class="works__title">Netflix Clone</span>
        </div>
      </div>
      <div class="works__img">
        <img src="assets/img/chat.jpg" alt="" />

        <div class="works__data">
          <div>
            <a href="https://chatapp-8588d.web.app/" target="_blank" class="works__link"><i class="bx bx-globe"></i></a>
            <a href="https://github.com/RyanPark0128/chatapp" target="_blank" class="works__link"><i class='bx bxl-github'></i></a>
          </div>
          <span class="works__title">Simply Chat</span>
        </div>
      </div>
      <div class="works__img">
        <img src="assets/img/covid.jpg" alt="" />

        <div class="works__data">
          <div>
            <a href="https://ryanpark0128.github.io/Corona_Tracker/" target="_blank" class="works__link"><i class="bx bx-globe"></i></a>
            <a href="https://github.com/RyanPark0128/Corona_Tracker" target="_blank" class="works__link"><i class='bx bxl-github'></i></a>
          </div>
          <span class="works__title">COVID-19 Dashboard</span>
        </div>
      </div>
    </div>
  </section>
}

export default Work