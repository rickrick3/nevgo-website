import missionImg from "../../assets/photos/pupils-young.jpeg";
import "./Mission.css";

export default function Mission() {
  return (
    <section className="section mission" id="mission">
      <div className="container mission__inner">
        <div className="mission__media">
          <img
            src={missionImg}
            alt="Primary school pupils holding new exercise books received from Nevgo"
            width="540"
            height="440"
          />
        </div>

        <div className="mission__content">
          <h2 className="mission__title">Our Mission</h2>
          <p>
            Nevgo is an education-focused initiative dedicated to improving access
            to quality learning in underserved communities. We work to identify
            gaps in education systems, support students and schools, and promote
            equal opportunities for all learners.
          </p>
          <p>
            We aim to create practical, sustainable solutions that help
            individuals grow and reach their full potential through education. By
            collaborating with local leaders, teachers, and global supporters, we
            build structural improvements that outlast short-term projects.
          </p>
        </div>
      </div>
    </section>
  );
}
