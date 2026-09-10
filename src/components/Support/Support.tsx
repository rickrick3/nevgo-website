import supportImg from "../../assets/photos/children-crowd.jpeg";
import Icon, { type IconName } from "../Icon/Icon";
import "./Support.css";

const METHODS: {
  key: string;
  name: string;
  detail: string;
  icon: IconName;
}[] = [
  {
    key: "mtn",
    name: "MTN MoMo",
    detail: "681 974 258 (TAMO RICHY)",
    icon: "smartphone",
  },
  {
    key: "orange",
    name: "Orange Money",
    detail: "640 859 916 (RICKY FAREL TAMO)",
    icon: "wallet",
  },
];

export default function Support() {
  return (
    <section className="section support" id="support">
      <div className="container support__inner">
        <div className="support__content">
          <h2 className="support__title">Support Our Mission</h2>
          <p className="support__lede">
            Your donation helps provide school supplies, support teachers, and
            create better learning environments for children in Cameroon. Every
            contribution counts.
          </p>

          <ul className="support__methods">
            {METHODS.map((m) => (
              <li className={`support__method support__method--${m.key}`} key={m.key}>
                <span className="support__method-icon">
                  <Icon name={m.icon} size={20} />
                </span>
                <span className="support__method-text">
                  <strong>{m.name}</strong>
                  <span>{m.detail}</span>
                </span>
              </li>
            ))}
          </ul>

          <a className="btn btn--primary" href="#contact">
            Contact for alternative support
          </a>
        </div>

        <div className="support__media">
          <img
            src={supportImg}
            alt="A large group of pupils celebrating with the supplies they received"
            width="520"
            height="560"
          />
        </div>
      </div>
    </section>
  );
}
