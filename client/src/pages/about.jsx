import React from "react";
import "./about.css";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import TagCloud from "../components/Tagcloud";
import avatar from "/images/Avatar.jpg";
import uqlogo from "/images/University_of_Queensland_(crest).png";

function about() {
  return (
    <>
      <Nav />
      <div className="about-content">
        <div className="about-title">
          <p>I'm Shixun.</p>
        </div>
        <div className="about-summary">
          <div className="summary-avatar">
            <img src={avatar} alt="avatar" />
            <div className="summary-education">
              <img src={uqlogo} alt="uq logo" />
              <span>Master of Computer Science @UQ</span>
            </div>
          </div>
          <div className="summary-content">
            <h3>
              I'm a recent graduate from the University of Queensland with a
              Master of Computer Science.
            </h3>
            <p>
              Software engineer with 3+ years of experience in full-stack
              development, specializing in front-end technologies like React and
              JavaScript, alongside back-end frameworks such as Python, C++,
              Java and database management. Proficient in cloud infrastructure
              tools like Docker, Terraform, and CI/CD pipelines. A proven team
              player with excellent communication, time management, and
              problem-solving skills.
            </p>
          </div>
        </div>
        {/* <div className="about-skills">
          <div className="skill-item java" style={{ "--targetWidth": "100%" }}>
            Java
          </div>
          <div className="skill-item python" style={{ "--targetWidth": "90%" }}>
            Python
          </div>
          <div className="skill-item react" style={{ "--targetWidth": "100%" }}>
            React & Vue
          </div>
          <div className="skill-item sql" style={{ "--targetWidth": "90%" }}>
            SQL
          </div>
        </div>
        <div className="about-tagcloud">
          <div>
            <TagCloud />
          </div>
        </div> */}
        <div className="about-tech">
          <div className="tech-list">
            <h3>Languages</h3>
            <div className="tech-item">
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                <h4>Python</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                <h4>Java</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                <h4>C/C++</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <h4>JavaScript</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                <h4>TypeScript</h4>
              </div>
            </div>
          </div>

          <div className="tech-list">
            <h3>Front-end</h3>
            <div className="tech-item">
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <h4>HTML5</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <h4>React</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />
                <h4>Vue</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
                <h4>Flutter</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                <h4>Tailwind</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg" />
                <h4>Bootstrap</h4>
              </div>
            </div>
          </div>

          <div className="tech-list">
            <h3>Back-end</h3>
            <div className="tech-item">
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                <h4>SpringBoot</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                <h4>Django</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
                <h4>Flask</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                <h4>Node.js</h4>
              </div>
            </div>
          </div>

          <div className="tech-list">
            <h3>Database</h3>
            <div className="tech-item">
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                <h4>MySQL</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                <h4>PostgreSQL</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" />
                <h4>SQLite</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                <h4>MongoDB</h4>
              </div>
            </div>
          </div>

          <div className="tech-list">
            <h3>Cloud</h3>
            <div className="tech-item">
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                <h4>AWS</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
                <h4>Azure</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <h4>Git</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" />
                <h4>Terraform</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                <h4>Docker</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" />
                <h4>Kubernetes</h4>
              </div>
              <div className="item-box">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" />
                <h4>Nginx</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="about-steps">
          <div className="steps-content">
            <div className="steps-content">
              <div className="content-row">
                <div className="each-step">
                  <h3>01</h3>
                  <h3>Plan it</h3>
                  <p>
                    I meticulously plan all my activities, ensuring a perfect
                    balance between study and personal life with a strict daily
                    schedule. This disciplined approach guarantees flawless
                    execution of all my current and future projects, each
                    benefiting from a thoughtfully crafted plan.
                  </p>
                </div>
                <div className="each-step">
                  <h3>02</h3>
                  <h3>Make it</h3>
                  <p>
                    By strictly adhering to a timetable, I ensure plans are
                    completed ahead of the set deadlines. I efficiently fulfill
                    my responsibilities with proficiency while humbly addressing
                    any shortcomings during the learning process.
                  </p>
                </div>
              </div>

              <div className="content-row">
                <div className="each-step">
                  <h3>03</h3>
                  <h3>Test it</h3>
                  <p>
                    Through experiments in real-world scenarios, the project's
                    reliability and stability are validated, identifying
                    potential issues that may arise during practical
                    application.
                  </p>
                </div>
                <div className="each-step">
                  <h3>04</h3>
                  <h3>Evaluate it</h3>
                  <p>
                    Refining and optimizing issues within the project, then
                    revisiting the planning phase to establish a complete
                    closed-loop model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default about;
