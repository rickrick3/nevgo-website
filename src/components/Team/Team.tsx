
import founderPhoto from "../../assets/team/founder.jpg";
import member001 from "../../assets/team/member-001.jpg";
import member002 from "../../assets/team/member-002.jpg";
import member003 from "../../assets/team/member-003.jpg";
import member004 from "../../assets/team/member-004.jpg";
import "./Team.css";

/* Name and quote taken from the Opportunity Awareness Program 2026 poster. */
const FOUNDER = {
  name: "Fogang Nevile",
  role: "Founder",
  photo: founderPhoto,
  quote:
    "Interested in technology, leadership, and creating opportunities for young people.",
};

/*
 * Placeholder names — replace with each member's real name.
 * `focus` is the CSS object-position used to keep the face centred in the crop.
 */
const MEMBERS = [
  { name: "Chia Joshua", role: "Graphic Designer", photo: member001, focus: "50% 50%" },
  { name: "Bianke Diland", role: "Team Member", photo: member002, focus: "50% 50%" },
  { name: "Njanteng Merveille", role: "Team Member", photo: member003, focus: "45% 50%" },
  {
    name: "Tamo Farel",
    role: "Social Media Manager & Software Developer",
    photo: member004,
    focus: "50% 30%",
  },
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
              alt={`${FOUNDER.name}, founder of Nevgo, speaking with a microphone at an event`}
              loading="lazy"
            />
          </div>
          <div className="team__founder-body">
            <span className="team__eyebrow">{FOUNDER.role}</span>
            <h3 className="team__founder-name">{FOUNDER.name}</h3>
            <blockquote className="team__quote">“{FOUNDER.quote}”</blockquote>
          </div>
        </article>

        <ul className="team__grid">
          {MEMBERS.map((member) => (
            <li className="team__card" key={member.name}>
              <div className="team__photo">
                <img
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  loading="lazy"
                  style={{ objectPosition: member.focus }}
                />
              </div>
              <h3 className="team__name">{member.name}</h3>
              <p className="team__role">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
