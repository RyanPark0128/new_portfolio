const Footer = () => {
  return <div className="footer section">
    <div className="footer__container bd-grid">
      <p className="footer__description">Developed by Ryan Park</p>
      <p className="footer__description">Powered by:</p>
      <img style={{ width: "100px", margin: "auto", marginBottom: "30px" }} src='https://camo.githubusercontent.com/affcb4d381c3f7305bd0598b9d426c17fdfc2bd7cd7f45352001834ab25f66bc/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f756e69636f646576656c6f7065722f696d6167652f75706c6f61642f76313532343737363736342f6e6578742d6a736c6f676f2e737667' />
      <div className="footer__social">
        <a href="#" target="_blank" className="footer__link"><i className="bx bxl-facebook"></i></a>
        <a href="https://linkedin.com/in/ryan-park-552aa9190" target="_blank" className="footer__link"><i className="bx bxl-linkedin"></i></a>
        <a href='https://github.com/RyanPark0128' target="_blank" className="footer__link"><i className='bx bxl-github'></i></a>
      </div>
      <p className="footer__copy">@ 2020. All rights reserved</p>
    </div>
  </div>
}

export default Footer