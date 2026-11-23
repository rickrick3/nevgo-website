import founderPhoto from "../../assets/team/founder.webp";
import member000 from "../../assets/team/team-member-000.webp";
import member001 from "../../assets/team/member-001.webp";
import member002 from "../../assets/team/member-002.webp";
import member003 from "../../assets/team/member-003.webp";
import member004 from "../../assets/team/member-004.webp";
import "./Team.css";

type Person = {
  name: string;
  role: string;
  photo: string;
  /* Optional CSS object-position to keep the face centred in the crop. */
  focus?: string;
};

/* Featured on top. Quote taken from the Opportunity Awareness Program 2026 poster. */
const FOUNDER = {
  name: "Fogang Nevile",
  role: "Founder",
  photo: founderPhoto,
  message:
    "Interested in technology, leadership, and creating opportunities for young people.",
};

/* Everyone else, shown below the founder. */
const MEMBERS: Person[] = [
  { name: "Chia Joshua", role: "Graphic Designer", photo: member001 },
  {
    name: "Tamo Farel",
    role: "Social Media Manager & Software Developer",
    photo: member004,
    focus: "50% 30%",
  },
  { name: "Simo Tambe", role: "Team Member", photo: member000 },
  { name: "Bianke Diland", role: "Team Member", photo: member002 },
  { name: "Njanteng Merveille", role: "Team Member", photo: member003, focus: "45% 50%" },
];

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="section-head">
          <h2 className="section-head__title">Meet the Team</h2>
          <div className="section-head__rule" />
          <p className="section-head__subtitle">
            The volunteers behind Nevgo, working to bring learning resources and
            opportunities to students across Cameroon.
          </p>
        </div>

        <article className="team__founder">
          <div className="team__photo team__photo--founder">
            <img
              src={FOUNDER.photo}
              alt={`Photo of ${FOUNDER.name}, ${FOUNDER.role} of Nevgo`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="team__founder-body">
            <span className="team__eyebrow">{FOUNDER.role}</span>
            <h3 className="team__founder-name">{FOUNDER.name}</h3>
            <blockquote className="team__quote">“{FOUNDER.message}”</blockquote>
          </div>
        </article>

        <ul className="team__members">
          {MEMBERS.map((person) => (
            <li className="team__card" key={person.name}>
              <div className="team__photo">
                <img
                  src={person.photo}
                  alt={`Photo of ${person.name}`}
                  loading="lazy"
                  decoding="async"
                  style={person.focus ? { objectPosition: person.focus } : undefined}
                />
              </div>
              <h3 className="team__name">{person.name}</h3>
              <p className="team__role">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
