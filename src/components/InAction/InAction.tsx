import logo from "../../assets/logo.jpeg";
import photo1 from "../../assets/photos/team-school.jpeg";
import photo2 from "../../assets/photos/coordinator.jpeg";
import photo3 from "../../assets/photos/supplies-table.jpeg";
import photo4 from "../../assets/photos/pupils-supplies.jpeg";
import "./InAction.css";

const PHOTOS = [
  { src: photo1, alt: "Nevgo team and teachers outside a partner school" },
  { src: photo2, alt: "School coordinator with donated supplies at his desk" },
  { src: photo3, alt: "Notebooks, pens, and pencils sorted for distribution" },
  { src: photo4, alt: "Pupils showing the exercise books they received" },
];

export default function InAction() {
  return (
    <section className="section section--cream" id="in-action">
      <div className="container">
        <div className="section-head">
          <h2 className="section-head__title">Nevgo In Action</h2>
          <div className="section-head__rule" />
          <p className="section-head__subtitle">
            Raw moments of joy, hard work, and support across Cameroon
            communities.
          </p>
        </div>

        <div className="inaction__grid">
          {PHOTOS.map((photo, i) => (
            <figure className={`inaction__item inaction__item--${i + 1}`} key={photo.alt}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
          <div className="inaction__logo">
            <img src={logo} alt="Nevgo — Education Impact Initiative" />
          </div>
        </div>
      </div>
    </section>
  );
}
