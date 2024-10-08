import { Link } from "react-router-dom";
import "./WhyChooseUs.scss";

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-choose-us">
        <div className="typography" data-aos="fade-up">
          <h2 className="bg-secondary rounded-full px-4 py-2 inline">
            Our Features
          </h2>
          <h1>Delivering Peace of Mind on Every Journey</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            consequuntur cumque voluptas? Vitae perspiciatis tempore saepe
            temporibus repellat? Alias exercitationem voluptas voluptates ea
            dignissimos ad fugit voluptatem odit animi. Distinctio!
          </p>
        </div>

        <div className="why-choose-us-container">
          <div
            className="why-choose-us-cards"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="card-icon">
              <i className="bx bx-command"></i>
            </div>
            <h3>Trusted Company</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              molestiae perferendis ex cupiditate, quas fuga!
            </p>
            <Link to="/" className="card-link">
              Read more
            </Link>
          </div>

          <div
            className="why-choose-us-cards"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="card-icon">
              <i className="bx bx-money-withdraw"></i>
            </div>
            <h3>Anytime Money Back</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              molestiae perferendis ex cupiditate, quas fuga!
            </p>
            <Link to="/" className="card-link">
              Read more
            </Link>
          </div>

          <div
            className="why-choose-us-cards"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="card-icon">
              <i className="bx bx-bullseye"></i>
            </div>
            <h3>Flexible Plans</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              molestiae perferendis ex cupiditate, quas fuga!
            </p>
            <Link to="/" className="card-link">
              Read more
            </Link>
          </div>

          <div
            className="why-choose-us-cards"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="card-icon">
              <i className="bx bx-headphone"></i>
            </div>
            <h3>24/7 Delivery</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              molestiae perferendis ex cupiditate, quas fuga!
            </p>
            <Link to="/" className="card-link">
              Read more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
