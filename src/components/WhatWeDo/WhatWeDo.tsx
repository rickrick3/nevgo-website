import supplyImg from "../../assets/photos/pupils-supplies.jpeg";
import outreachImg from "../../assets/photos/pupils-older.jpeg";
import supportImg from "../../assets/photos/coordinator.jpeg";
import "./WhatWeDo.css";

const ITEMS = [
  {
    img: supplyImg,
    alt: "Pupils holding notebooks distributed by Nevgo",
    title: "School Supply Distribution",
    body: "Providing essential learning materials including notebooks, mathematical sets, and writing materials directly to underserved children.",
  },
  {
    img: outreachImg,
    alt: "Older pupils outside their classroom with learning materials",
    title: "Community Outreach",
    body: "Our team regularly visits remote primary schools to survey educational conditions, coordinate with local educators, and assess long-term infrastructure needs.",
  },
  {
    img: supportImg,
    alt: "School coordinator with supplies delivered by Nevgo",
    title: "Student Support",
    body: "Promoting equal opportunities for learners by funding materials and support structures that enable continuous school attendance and basic literacy.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="section" id="what-we-do">
      <div className="container">
        <div className="section-head">
          <h2 className="section-head__title">What We Do</h2>
          <div className="section-head__rule" />
          <p className="section-head__subtitle">
            We design structured programs addressing the direct learning barriers
            children face.
          </p>
        </div>

        <ul className="wwd__grid">
          {ITEMS.map((item) => (
            <li className="wwd__card" key={item.title}>
              <div className="wwd__media">
                <img src={item.img} alt={item.alt} loading="lazy" />
              </div>
              <h3 className="wwd__title">{item.title}</h3>
              <p className="wwd__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
