import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Full Stack Developer with 2+ years of experience building
          production-grade web applications using the MERN stack and Next.js. I have a
          proven track record of shipping performant frontends, designing secure and
          efficient APIs with JWT and GraphQL, and setting up automated CI/CD pipelines
          on AWS. I thrive on owning features end-to-end, optimizing database query and cache
          performance, and writing test suites to deliver robust releases.
        </p>
      </div>
    </div>
  );
};

export default About;
