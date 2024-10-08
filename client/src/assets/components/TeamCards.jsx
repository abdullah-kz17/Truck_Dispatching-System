import "./TeamCards.scss";
import avatar1 from "/images/female-avatar.png";
import avatar2 from "/images/male1-avatar.png";
import avatar3 from "/images/male2-avatar.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Abdul Raheem",
    role: "CEO",
    image: avatar3,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
  {
    id: 2,
    name: "Amir Khalil",
    role: "CTO",
    image: avatar2,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
  {
    id: 3,
    name: "Sam Wilson",
    role: "Lead Developer",
    image: avatar1,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
];

const TeamCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <div className="team-section">
      <div className="typography">
        <h1 className="bg-secondary rounded-full px-4 py-2 t-head">
          Meet Our Team
        </h1>
        <h2>Your Trusted Partners in Every Journey</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          magnam pariatur. Totam, earum dolore quibusdam adipisci mollitia
          cumque blanditiis minima.
        </p>
      </div>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="team-card"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <img className="team-image" src={member.image} alt={member.name} />
            <div className="team-content">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <div className="social-icons">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
