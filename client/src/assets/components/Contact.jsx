import "./Contact.scss";
import { useAuth } from "../../store/auth";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const defaultContactForm = {
  username: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(defaultContactForm);

  const { user, authorizationToken } = useAuth();

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        subject: "",
        message: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    try {
      const response = await fetch("http://localhost:5010/api/form/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response from server:", data);
        toast.success("Message sent successfully");
        setFormData(defaultContactForm); // Reset form after successful submission
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Message not sent");
      }
    } catch (error) {
      toast.error("Message not sent");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="contact-section">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-details">
            <h3>Get in Touch</h3>
            <p>
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done. Download
              Now.
            </p>
            <div className="contact-info-container">
              <div className="contact-info">
                <div className="icon">
                  <i className="bx bx-location-plus"></i>
                </div>
                <h2>Address</h2>
                <p>123 Street New York.USA</p>
              </div>
              <div className="contact-info">
                <div className="icon">
                  <i className="bx bx-phone"></i>
                </div>
                <h2>Phone</h2>
                <p>+1 234 567 890</p>
              </div>
              <div className="contact-info">
                <div className="icon">
                  <i className="bx bxl-opera"></i>
                </div>
                <h2>Website</h2>
                <p>www.example.com</p>
              </div>
              <div className="contact-info">
                <div className="icon">
                  <i className="bx bx-envelope"></i>
                </div>
                <h2>Email</h2>
                <p>contact@example.com</p>
              </div>
              <div className="contact-social-icons">
                <div className="social">
                  <Link to="#">
                    <i className="bx bxl-facebook"></i>
                  </Link>
                </div>
                <div className="social">
                  <Link to="#">
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                </div>
                <div className="social">
                  <Link to="#">
                    <i className="bx bxl-instagram"></i>
                  </Link>
                </div>
                <div className="social">
                  <Link to="#">
                    <i className="bx bxl-twitter"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.405267549369!2d-2.7597251246263284!3d52.70683002238206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a9e50e0c9aaab%3A0x3c393f340087e3dc!2sAlpha%20Cargo%20Services!5e0!3m2!1sen!2s!4v1722508650043!5m2!1sen!2s"
        width="1200"
        height="450"
        style={{ border: 0, padding: 50 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </>
  );
};

export default Contact;
