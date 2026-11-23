import logo from "../../assets/logo.jpeg";
import photo1 from "../../assets/photos/team-school.webp";
import photo2 from "../../assets/photos/coordinator.webp";
import photo3 from "../../assets/photos/supplies-table.webp";
import photo4 from "../../assets/photos/pupils-supplies.webp";
import "./InAction.css";

const PHOTOS = [
  {
    src: photo1,
    alt: "Nevgo team and teachers outside a partner school",
    title: "Standing with our partner schools",
    caption:
      "Our volunteers with the staff of École Publique de Basse Bamougoum on donation day.",
  },
  {
    src: photo2,
    alt: "School coordinator with donated supplies at his desk",
    title: "Supplies in the right hands",
    caption:
      "The school coordinator receives exercise books, pens, pencils, chalk, and slates to share with his pupils.",
  },
  {
    src: photo3,
    alt: "Notebooks, pens, and pencils sorted for distribution",
    title: "Every item counted",
    caption:
      "Exercise books, pencils, pens, and slates sorted before they go out to each class.",
  },
  {
    src: photo4,
    alt: "Pupils showing the exercise books they received",
    title: "Ready to learn",
    caption: "Pupils proudly show off the new exercise books they received.",
  },
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
              <div className="inaction__media">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
              <figcaption className="inaction__caption">
                <h3 className="inaction__title">{photo.title}</h3>
                <p className="inaction__text">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
          <div className="inaction__logo">
            <img src={logo} alt="Nevgo — Education Impact Initiative" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
