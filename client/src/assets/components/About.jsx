import { Link } from "react-router-dom"
import about from "/images/about-us.png";
import "./About.scss"

const About = () => {
    return(
        <>
        <section className="about-us-section flex">
        <div className="about-us-image" data-aos="fade-right">
          <img src={about} alt="About Us" />
        </div>
        <div className="about-us-content" data-aos="fade-left">
          <h2>About Us</h2>
          <p>
            We provide top-notch truck dispatching services to ensure your
            freight reaches its destination safely and on time. Our dedicated
            team of professionals works around the clock to provide efficient
            and reliable services tailored to your needs. With a commitment to
            transparency and customer satisfaction, we strive to be your trusted
            partner in the trucking industry.
          </p>
          <Link to="/about" className="about-link text-black">
            Learn More
          </Link>
        </div>
      </section>
        </>
    )
}
export default About