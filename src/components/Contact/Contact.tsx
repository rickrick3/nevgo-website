import { useState, type FormEvent } from "react";
import Icon from "../Icon/Icon";
import "./Contact.css";

const EMAIL = "nevgo23@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Website inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    form.reset();
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head">
          <h2 className="section-head__title">Get In Touch</h2>
          <div className="section-head__rule" />
          <p className="section-head__subtitle">
            Have questions, ideas, or want to partner? Drop us a message or visit
            us in Buea.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__details">
            <h3>Contact Details</h3>
            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <Icon name="map-pin" size={17} />
                </span>
                Buea, Cameroon
              </li>
              <li>
                <span className="contact__icon">
                  <Icon name="phone" size={17} />
                </span>
                <a href="tel:+237672526222">+237 672 526 222</a>
              </li>
              <li>
                <span className="contact__icon">
                  <Icon name="mail" size={17} />
                </span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>

            <p className="contact__socials-label">Find us on socials</p>
            <div className="contact__socials">
              <a href="https://www.facebook.com/profile.php?id=61589228382711" target="_blank" rel="noreferrer">
                <Icon name="facebook" size={18} />
                Facebook
              </a>
              <a href="https://www.linkedin.com/company/nevgo" target="_blank" rel="noreferrer">
                <Icon name="linkedin" size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <h3>Quick Inquiry</h3>
            <label className="contact__field">
              <span className="sr-only">Your Name</span>
              <input type="text" name="name" placeholder="Your Name" required />
            </label>
            <label className="contact__field">
              <span className="sr-only">Email Address</span>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </label>
            <label className="contact__field">
              <span className="sr-only">Message or Inquiry</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Message or Inquiry"
                required
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Submit Message
            </button>
            {sent && (
              <p className="contact__note" role="status">
                Thanks — your email client should have opened. If not, write to us
                at {EMAIL}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
