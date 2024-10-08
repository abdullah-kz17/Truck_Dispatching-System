import "./Home.scss";
import truck from "/images/truck.png";
import About from "../components/About";
import Services from "../components/Services";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1: Contact Us",
      description:
        "Get in touch with our team to discuss your trucking needs and get a customized solution.",
      icon: "bx bx-phone",
    },
    {
      id: 2,
      title: "Step 2: Plan Your Route",
      description:
        "We plan the most efficient and safe route for your freight.",
      icon: "bx bx-map",
    },
    {
      id: 3,
      title: "Step 3: Dispatch",
      description:
        "Our team dispatches the truck and monitors the shipment throughout its journey.",
      icon: "bx bxs-truck",
    },
    {
      id: 4,
      title: "Step 4: Delivery",
      description:
        "Your freight is delivered safely and on time to the desired destination.",
      icon: "bx bx-package",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <div className="home-page">
      <section className="hero-section flex">
        <div className="hero-content">
          <h2 className="font-bold text-lg">
            Welcome to Alpha Cargo Solutions
          </h2>
          <h1>Your Trusted Truck Dispatch Service</h1>
          <p>Reliable, efficient, and transparent trucking solutions.</p>
          <div className="cta-buttons">
            <button className="cta-button">Get Started</button>
            <button className="cta-button contact-button">Contact Us</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={truck} alt="Truck" height={800} width={800} />
        </div>
      </section>

      <About />
      <WhyChooseUs />
      <Services />

      <section className="how-it-works-section">
        <div className="typography" data-aos="fade-up">
          <h1 className="bg-secondary rounded-full px-4 py-2 inline">
            How It Works
          </h1>
          <h2>Efficient Dispatching Made Easy</h2>
          <p>
            Our team will review your request and provide a customized solution
            tailored to your specific needs. We consider factors like optimal
            routes, timing, and cost-efficiency to offer the best possible
            service.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="step-card"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="step-icon">
                <i className={step.icon}></i>
              </div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <Blogs />

      <section className="newsletter-section">
        <div className="newsletter-container" data-aos="fade-up">
          <h1>Subscribe to Our Newsletter</h1>
          <p>Stay updated with the latest news and special offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
