import "./Quote.css";

export default function Quote() {
  return (
    <section className="quote">
      <div className="container quote__inner">
        <span className="quote__mark" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="quote__text">
          Education is the most powerful weapon which you can use to change the
          world. Providing these children with simple textbooks today shapes
          Cameroon&rsquo;s tomorrow.
        </blockquote>
        <p className="quote__author">Nevgo Leadership Board</p>
        <p className="quote__place">Buea, Cameroon</p>
      </div>
    </section>
  );
}
