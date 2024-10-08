import Contact from "../components/Contact";
import FAQs from "../components/FAQs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <header
        className="text-center h-80 flex flex-col justify-center align-center px-52 py-8 bg-primary text-white"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold  mb-6">Contact Us</h1>
        <p className="text-lg ">
          Welcome to Alpha Cargo Solutions. We are dedicated to providing
          reliable and efficient transportation and logistics services, ensuring
          your cargo reaches its destination safely and on time
        </p>
      </header>
      <Contact />
      <FAQs />
    </>
  );
};
export default ContactUs;
