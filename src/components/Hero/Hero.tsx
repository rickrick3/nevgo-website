import heroImg from "../../assets/photos/team-school.jpeg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Education Impact Initiative</p>
          <h1 className="hero__title">
            Empowering Communities Through Education
          </h1>
          <p className="hero__lede">
            Nevgo is dedicated to improving access to quality learning in
            underserved communities across Cameroon.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#support">
              Donate Now
            </a>
            <a className="btn btn--outline" href="#mission">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero__media">
          <img
            src={heroImg}
            alt="Nevgo team and teachers gathered outside a partner school in Cameroon"
            width="620"
            height="460"
          />
        </div>
      </div>
    </section>
  );
}
