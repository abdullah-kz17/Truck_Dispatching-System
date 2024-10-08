import { Link } from "react-router-dom";
import "./Footer.scss"
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h4>About Alpha Cargo Solutions</h4>
            <p>
              We are dedicated to providing top-notch truck dispatch services to
              ensure your freight reaches its destination safely and on time.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <i className="bx bx-phone-alt"></i> +1 (123) 456-7890
            </p>
            <p>
              <i className="bx bx-envelope"></i> info@alphacargosolutions.com
            </p>
            <div className="footer-socials">
              <Link to="/facebook">
                <i className="bx bxl-facebook"></i>
              </Link>
              <Link to="/twitter">
                <i className="bx bxl-twitter"></i>
              </Link>
              <Link to="/instagram">
                <i className="bx bxl-instagram"></i>
              </Link>
              <Link to="/linkedin">
                <i className="bx bxl-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Alpha Cargo Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
