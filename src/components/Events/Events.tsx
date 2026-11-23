import Icon from "../Icon/Icon";
import opportunityPoster from "../../assets/events/opportunity-awareness-2026.webp";
import workshopPoster from "../../assets/events/application-workshop-2026.webp";
import skillsPoster from "../../assets/events/skills-of-tomorrow.webp";
import jobsPoster from "../../assets/events/jobs-of-tomorrow.webp";
import labsPoster from "../../assets/events/science-laboratories.webp";
import "./Events.css";

const LINKEDIN_URL = "https://www.linkedin.com/company/nevgo";

type Item = {
  tag: string;
  kind: "event" | "post";
  title: string;
  date?: string;
  venue?: string;
  summary: string;
  poster: string;
  alt: string;
  /* Points at the LinkedIn page for now — swap in the direct post URL when you have it. */
  href: string;
};

const ITEMS: Item[] = [
  {
    tag: "Program",
    kind: "event",
    title: "Opportunity Awareness Program 2026",
    date: "15–16 September 2026",
    venue: "GBHS Kena, Bafoussam",
    summary:
      "Two days of talks where four student guest speakers, from biochemistry and medicine to mechanical and software engineering, shared their journeys and the opportunities open to young people.",
    poster: opportunityPoster,
    alt: "Poster for the NevGo Opportunity Awareness Program 2026 showing the four guest speakers",
    href: LINKEDIN_URL,
  },
  {
    tag: "Workshop",
    kind: "event",
    title: "Application Workshop",
    date: "15 November 2026, 1:00 PM",
    venue: "University of Buea, U Block",
    summary:
      "With FET Learning and Innovation Hub, we guided students from search to the final click: finding real opportunities, preparing a CV and cover letter, and submitting a live application together.",
    poster: workshopPoster,
    alt: "Poster for the Nevgo and FET Learning and Innovation Hub Application Workshop",
    href: LINKEDIN_URL,
  },
  {
    tag: "Discussion",
    kind: "post",
    title: "Are students learning the skills of tomorrow?",
    summary:
      "Good grades matter, but employers want problem solvers, innovators, and critical thinkers. What skill should every student learn before graduating?",
    poster: skillsPoster,
    alt: "Nevgo post asking whether students are learning the skills of tomorrow",
    href: LINKEDIN_URL,
  },
  {
    tag: "Discussion",
    kind: "post",
    title: "Are Cameroonian students ready for the jobs of tomorrow?",
    summary:
      "AI, robotics, data science, and renewable energy create new careers every year. We looked at what holds students back: little practical learning, limited access to technology, and weak links with industry.",
    poster: jobsPoster,
    alt: "Nevgo post asking whether Cameroonian students are ready for the jobs of tomorrow",
    href: LINKEDIN_URL,
  },
  {
    tag: "Discussion",
    kind: "post",
    title: "How many schools in Cameroon have science laboratories?",
    summary:
      "Without labs, Physics, Chemistry, and Biology stay on the blackboard. Why hands-on learning is essential for tomorrow's engineers, doctors, and researchers.",
    poster: labsPoster,
    alt: "Nevgo post asking how many schools in Cameroon have science laboratories",
    href: LINKEDIN_URL,
  },
];

export default function Events() {
  return (
    <section className="section section--cream" id="events">
      <div className="container">
        <div className="section-head">
          <h2 className="section-head__title">Past Events &amp; Posts</h2>
          <div className="section-head__rule" />
          <p className="section-head__subtitle">
            Programs, workshops, and conversations from the Nevgo community.
            The full posts and photos are on our LinkedIn page.
          </p>
        </div>

        <div className="events__grid">
          {ITEMS.map((item) => (
            <article className="events__card" key={item.title}>
              <div className="events__poster">
                <img src={item.poster} alt={item.alt} loading="lazy" />
              </div>

              <div className="events__body">
                <span className={`events__tag events__tag--${item.kind}`}>
                  {item.tag}
                </span>
                <h3 className="events__title">{item.title}</h3>

                {item.date || item.venue ? (
                  <ul className="events__meta">
                    {item.date ? (
                      <li>
                        <Icon name="calendar" size={15} />
                        {item.date}
                      </li>
                    ) : null}
                    {item.venue ? (
                      <li>
                        <Icon name="map-pin" size={15} />
                        {item.venue}
                      </li>
                    ) : null}
                  </ul>
                ) : null}

                <p className="events__summary">{item.summary}</p>

                <a
                  className="events__link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View “${item.title}” on LinkedIn`}
                >
                  View on LinkedIn
                  <Icon name="arrow-right" size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="events__cta">
          <a
            className="btn btn--outline"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" size={16} />
            Follow Nevgo on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
