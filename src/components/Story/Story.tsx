import posterImg from "../../assets/photos/talk-opportunity-circle-wide.webp";
import photo1 from "../../assets/photos/talk-full-classroom.webp";
import photo2 from "../../assets/photos/talk-students-listening.webp";
import photo3 from "../../assets/photos/talk-linkedin-board.webp";
import photo4 from "../../assets/photos/talk-opportunity-circle-close.webp";
import photo5 from "../../assets/photos/talk-scholarship-board.webp";
import photo6 from "../../assets/photos/talk-group-debrief.webp";
import "./Story.css";

const PHOTOS = [
  { src: photo1, alt: "A Nevgo volunteer filming a full classroom of students during the talk" },
  { src: photo2, alt: "Students listening closely as Nevgo volunteers speak" },
  { src: photo3, alt: "Volunteers by a blackboard reading LinkedIn and Gen Dreams" },
  { src: photo4, alt: "Volunteers leading the Opportunity Circle discussion with students" },
  { src: photo5, alt: "Blackboard listing scholarships, competitions, fellowships, and online courses" },
  { src: photo6, alt: "Volunteers and a teacher debriefing after the classroom talk" },
];

export default function Story() {
  return (
    <section className="section" id="story">
      <div className="container">
        <div className="section-head">
          <h2 className="section-head__title">Inside the Classroom</h2>
          <div className="section-head__rule" />
          <p className="section-head__subtitle">
            Notes from our latest school visits in Cameroon.
          </p>
        </div>

        <p className="story__lead">
          We walked into classrooms with one simple goal: to make students
          more aware of the opportunities around them and remind them that
          their education can open doors beyond what they currently see.
        </p>

        <div className="story__video">
          {/* preload="none": the 4 MB video only downloads when someone presses play */}
          <video controls preload="none" poster={posterImg} playsInline>
            <source src="/videos/classroom-talk-recap.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="story__grid">
          {PHOTOS.map((photo) => (
            <figure className="story__item" key={photo.alt}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
