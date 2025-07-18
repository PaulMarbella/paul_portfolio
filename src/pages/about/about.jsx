import { FaSchool, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div>
        <h1 className="text-center mt-5">
          <span className="span-title">About</span> Me
        </h1>
      </div>

      {/* Make this a proper row */}
      <div className="container-fluid mt-5">
        <div className="about-container">
          {/* LEFT COLUMN */}
          <div
            className="col-md-6 d-flex flex-column align-items-center mb-4"
            data-aos="fade-right"
          >
            <h4 className="about-text text-center">
              I enjoy learning new technologies, working on personal projects,
              and continuously improving my craft. My long-term goal is to
              contribute to meaningful software projects, collaborate with great
              teams, and grow into a well-rounded developer.
            </h4>
            <div className="d-flex gap-4 mt-3">
              <span>🎇</span>
              <span>🧨</span>
              <span>🎃</span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6 about-right d-flex flex-column align-items-center">
            {/* Education Card */}
            <div className="about-card mb-4" data-aos="fade-up">
              <div className="about-card-inner">
                <div className="about-card-front">
                  <FaSchool size={90} />
                  <h3>Education</h3>
                </div>
                <div className="about-card-overlay">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/pup-logo.png`}
                    className="pup-logo"
                    alt="PUP Logo"
                  />
                  <p>
                    <strong>October 2021 - October 2025</strong>
                    <br />
                    Polytechnic University of the Philippines
                    <br />
                    Bachelor of Science in Computer Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Internship Card */}
            <div className="about-card" data-aos="fade-up">
              <div className="about-card-inner">
                <div className="about-card-front">
                  <FaBriefcase size={90} />
                  <h3>Internship</h3>
                </div>
                <div className="about-card-overlay2">
                  <div>
                    <img
                      src={`${import.meta.env.BASE_URL}assets/vct-logo.png`}
                      className="pup-logo"
                      alt="VCT Logo"
                    />
                    <p>
                      <strong>Aug 2023 – Oct 2023</strong>
                      <br />
                      Software Developer – VCT Network
                    </p>
                  </div>
                  <div>
                    <img
                      src={`${import.meta.env.BASE_URL}assets/etr-logo.png`}
                      className="pup-logo"
                      alt="ETR Logo"
                    />
                    <p>
                      <strong>Aug 2024 – Oct 2024</strong>
                      <br />
                      Mobile Dev – ETR Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
