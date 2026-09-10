import logo from "../../assets/logo.jpeg";
import Icon from "../Icon/Icon";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="Nevgo — Education Impact Initiative" />
          <p>
            Nevgo is an education-focused, non-governmental, and non-profit
            organization helping children access proper education resources and
            materials in Buea and surrounding regions of Cameroon.
          </p>
        </div>

        <nav className="site-footer__col" aria-label="Quick links">
          <h4>Quick Links</h4>
          <a href="#top">Home</a>
          <a href="#mission">About Us</a>
          <a href="#what-we-do">Our Work</a>
          <a href="#support">Donate Now</a>
        </nav>

        <div className="site-footer__col">
          <h4>Office Location</h4>
          <p>Buea, Southwest Region, Cameroon</p>
          <a href="mailto:nevgo23@gmail.com">nevgo23@gmail.com</a>
          <a href="tel:+237672526222">+237 672 526 222</a>
        </div>

        <nav className="site-footer__col" aria-label="Social links">
          <h4>Socials</h4>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Icon name="facebook" size={16} />
            Facebook
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={16} />
            LinkedIn
          </a>
        </nav>
      </div>

      <div className="container site-footer__bottom">
        <span>
          Copyright © {new Date().getFullYear()} Nevgo. All rights reserved.
          Registered nonprofit organization in Cameroon.
        </span>
        <a href="#top" className="site-footer__top">
          Back to top
          <Icon name="arrow-up" size={15} />
        </a>
      </div>
    </footer>
  );
}
