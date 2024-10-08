import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import TeamCard from "../components/TeamCards";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <div className=" mx-auto overflow-x-hidden">
        <header
          className="text-center h-80 flex flex-col justify-center align-center px-52 py-8 mb-12 bg-primary text-white"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold  mb-6">About Us</h1>
          <p className="text-lg ">
            Welcome to Alpha Cargo Solutions. We are dedicated to providing
            reliable and efficient transportation and logistics services,
            ensuring your cargo reaches its destination safely and on time
          </p>
        </header>

        <About />
        <section className="">
          <div className="bg-gray-100 pb-20 pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-primary">
                  Our Vision & Mission
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Guiding principles that drive us forward
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-8">
                <div
                  className="flex-1 bg-white shadow-lg rounded-lg p-6 mb-6 lg:mb-0"
                  data-aos="fade-right"
                >
                  <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
                  <p className="mt-4 text-gray-600">
                    We strive to be the leading provider of innovative and
                    sustainable solutions in the logistics industry. Our goal is
                    to revolutionize cargo management and delivery through
                    cutting-edge technology and unparalleled customer service.
                  </p>
                </div>
                <div
                  className="flex-1 bg-white shadow-lg rounded-lg p-6"
                  data-aos="fade-left"
                >
                  <h3 className="text-2xl font-bold text-gray-800">Mission</h3>
                  <p className="mt-4 text-gray-600">
                    Our mission is to provide reliable, efficient, and
                    eco-friendly cargo solutions that exceed our customers
                    expectations. We are dedicated to continuous improvement,
                    fostering a culture of safety, and contributing positively
                    to the communities we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <TeamCard />

        <Services />

        <Testimonials />
      </div>
    </>
  );
};
export default AboutUs;
