const Footer = () => {
  return <div className="footer section">
    <div className="footer__container bd-grid">
      <p className="footer__description">Developed by Ryan Park</p>
      <div className="footer__social">
        <a href="https://linkedin.com/in/ryanpark0128" target="_blank" className="footer__link"><i className="bx bxl-linkedin"></i></a>
        <a href='https://github.com/ryanpark0128' target="_blank" className="footer__link"><i className='bx bxl-github'></i></a>
      </div>
      <p className="footer__copy" style={{ color: 'white' }}>@ 2020. All rights reserved</p>
    </div>
  </div>
}

export default Footer