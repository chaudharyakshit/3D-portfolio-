import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/akshit-chaudhary-485a39237/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — akshit-chaudhary
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech CSE (CGPA: 8.5/10), Roorkee College of Engineering — 2021–2025
            </p>
            <h4>Certifications</h4>
            <p style={{ fontSize: "14px", opacity: 0.8 }}>
              Full Stack Dev (Smartbrains) · DSA in C (IIT Bombay) · DSA in Java (NPTEL) · IT Certification (L&T Edutech)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/chaudharyakshit"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/akshit-chaudhary-485a39237/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/chaudhary_akshit001/?hl=en"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Akshit Chaudhary</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
