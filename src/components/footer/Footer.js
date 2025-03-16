import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <>
      <footer id="footer">
        <section id="footer-section">
          <div id="footer-logo">
            <img src="/site-images/logos/LittleLemonFoot.png" alt="Footer logo" />
          </div>
          <address id="footer-contact">
            <h2>Contact us</h2>
            <p>Address: 1699 Oak Avenue, Chicago, IL 60606</p>
            <p>Phone: (312) 528-5097</p>
            <p>Email: info@littlelemon.com</p>
            <p>2025 by Little Lemon. All Rights Reserved.</p>
          </address>
          <section id="footer-socials">
            <h2>Connect with us</h2>
            <div id="socials-icons">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              <FontAwesomeIcon icon={faPinterest} size="2x" />
            </div>
          </section>
        </section>
      </footer>
    </>
  );
}

export default Footer;