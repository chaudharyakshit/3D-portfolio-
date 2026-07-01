import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Indiasgo · Noida</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Jul 2025 – Present. Own end-to-end full-stack features using Next.js, React, Node.js, Express, and MongoDB. 
              Improved page load speed by 35% via dynamic imports, lazy loading, and React.memo. Reduced database load 
              by 40% using Redis caching and API optimizations (REST &amp; GraphQL), and optimized queries by 30% with 
              schema indexing. Cut errors by 35% through Jest and React Testing Library unit testing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack &amp; DevOps</h4>
                <h5>Dr. Mudhiwalla · Delhi</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Jan 2025 – Jul 2025. Architected Next.js dashboard with Socket.io real-time updates and RBAC on AWS EC2, serving 100+ concurrent users with 99.5% uptime. Reduced API response times by 45% using Redis caching. Managed Docker, PM2, Nginx reverse proxy, and GitHub Actions CI/CD pipelines. Boosted organic SEO visibility by 45% and reduced MTTR by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer Intern</h4>
                <h5>SS Technology · Dehradun</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Jul 2024 – Sep 2024. Built management application features using React, Node.js, Express, and MongoDB with Mongoose validation. Integrated REST APIs using Axios, and wrote Jest unit tests to identify and resolve query performance bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
