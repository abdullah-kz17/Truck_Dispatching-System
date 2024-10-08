import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Testimonials.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "Excellent service! They handled my freight with care and delivered on time.",
      image: "/images/testimonials-1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback:
        "Great experience! The team was very professional and efficient.",
      image: "/images/testimonials-2.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Michael Johnson",
      feedback: "Highly recommend! Their dispatch service is top-notch.",
      image: "/images/testimonials-3.jpg",
      rating: 5,
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
      <section className="testimonials-section">
        <h1>What Our Clients Say</h1>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          scrollbar={{ draggable: true }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card" data-aos="fade-up">
                <div className="testimonial-content">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <p>{testimonial.feedback}</p>
                  <div className="star-rating">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <i
                        key={index}
                        className="bx bxs-star text-yellow-500 mb-4"
                      ></i>
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, index) => (
                      <i key={index} className="fas fa-star"></i>
                    ))}
                  </div>
                  <h4>{testimonial.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
