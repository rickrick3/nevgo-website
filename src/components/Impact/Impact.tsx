import "./Impact.css";

const STATS = [
  { value: "500+", label: "Students Supported" },
  { value: "10+", label: "Schools Reached" },
  { value: "1,000+", label: "Supplies Donated" },
  { value: "5+", label: "Communities Served" },
];

export default function Impact() {
  return (
    <section className="section section--cream" id="impact">
      <div className="container">
        <div className="section-head">
          <h2 className="section-head__title">Our Global Impact</h2>
          <div className="section-head__rule" />
          <p className="section-head__subtitle">
            Simple metrics reflecting our daily dedication to underserved schools.
          </p>
        </div>

        <ul className="impact__grid">
          {STATS.map((s) => (
            <li className="impact__card" key={s.label}>
              <span className="impact__value">{s.value}</span>
              <span className="impact__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
