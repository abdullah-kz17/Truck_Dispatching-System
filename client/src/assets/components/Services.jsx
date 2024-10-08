import { Link } from "react-router-dom";
import "./Services.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
  // const { services } = useAuth();
  const services = [
    {
      id: 1,
      name: "Full Truckload (FTL) Service",
      description:
        "Our Full Truckload (FTL) service provides dedicated trucks for your large shipments. This service ensures your freight is transported directly to its destination without any stops.",
      icon: "bi bi-truck",
    },
    {
      id: 2,
      name: "Less Than Truckload (LTL) Service",
      description:
        "Our Less Than Truckload (LTL) service is ideal for smaller shipments. Share the truck space with other shipments and enjoy cost-effective transportation.",
      icon: "bi bi-truck-flatbed",
    },
    {
      id: 3,
      name: "Expedited Freight Service",
      description:
        "Need to move your freight quickly? Our Expedited Freight Service ensures your shipment reaches its destination as fast as possible.",
      icon: "bi bi-truck-front",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <section className="service-section">
        <div className="typography" data-aos="fade-up">
          <h1 className="bg-secondary rounded-full px-4 py-2 inline">
            Our Services
          </h1>
          <h2>Your Partner in Efficient Freight Solutions</h2>
          <p>
            We provide efficient and reliable truck dispatching services to
            ensure your cargo is transported swiftly and securely. Our
            experienced dispatchers use the latest technology to optimize routes
            and minimize transit times.
          </p>
        </div>
        <div className="service-container">
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <div
                key={service._id}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="service-item">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h4>{service.name}</h4>
                  <p>{service.description}</p>
                  <Link to="/about" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No services available</p>
          )}
        </div>
      </section>
    </>
  );
};
export default Services;
