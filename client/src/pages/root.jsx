import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./root.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import logoBanner from "/images/logo-banner.png";
import houseVideo from "/images/fashion.mp4";
import kube from "/images/weather-explorer.jpg";
import ims from "/images/ims.png";
import resume from "../assets/SHIXUN LI_Resume.pdf";
import Slider from "../components/Slider";
import arc from "/images/arc.png";

function root() {
  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      <div className="content">
        <div className="banner">
          <h1>Hello,</h1>
          <h1>
            Nice to meet you<span className="flashing-cursor">|</span>
          </h1>
          <div className="content-contact">
            <IoIosArrowRoundForward
              style={{ color: "white", margin: "30px" }}
              size="130px"
            />
            <div className="content-contact-item">
              <p>Front-end &</p>
              <p>Back-end development</p>
            </div>
            <div className="content-contact-item">
              <p>DevOps</p>
            </div>
            <div className="content-contact-item">
              <p>Contact:</p>
              <p>lishixun1219@gmail.com</p>
              <div className="content-icons">
                <a href="https://www.linkedin.com/in/shixun-li-669a4b287/">
                  <FaLinkedin
                    style={{
                      color: "white",
                      marginTop: "10px",
                      transition: "transform 0.5s ease-in-out",
                    }}
                    size="30px"
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </a>
                <a href="https://github.com/RicardoYam">
                  <FaGithub
                    style={{
                      color: "white",
                      marginTop: "10px",
                      transition: "transform 0.5s ease-in-out",
                    }}
                    size="30px"
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </a>
                <a href="https://leetcode.com/RicardoOVO/">
                  <SiLeetcode
                    style={{
                      color: "white",
                      marginTop: "10px",
                      transition: "transform 0.5s ease-in-out",
                    }}
                    size="30px"
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </a>
                <div className="resume">
                  <a href={resume} download>
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-kubernetes">
          <Slider images={[ims, arc]} />
          <div className="content-intro-text content-kub">
            <div className="lable-text">
              Inventory management system for clothing business👗
            </div>
            <span className="content-intro-text-lable">
              <Link
                to={"https://demoims.com"}
                style={{ marginRight: "20px", color: "#11ee72" }}
              >
                Demo
              </Link>
              <Link
                to={"https://github.com/RicardoYam/InventoryManagementSystem"}
              >
                View this project
              </Link>
            </span>
            <p>
              IMS is an open-source Inventory Management System which provides
              powerful features for stock control, customer management and order
              placement, deployed on highly available AWS services. The system
              is built on a Python/Django-based database backend, coupled with
              an interactive React-based frontend, providing an intuitive
              interface for shop managers to efficiently manage operations.
            </p>
          </div>
        </div>

        <div className="content-intro">
          <div className="cotent-intro-text">
            <img src={logoBanner} alt="intro-image" />
            <div className="content-intro-text-lable">
              <div className="lable-text">shixunli.com</div>
              <span>
                <Link to={"https://github.com/RicardoYam/Shixun_blog"}>
                  View this project
                </Link>
              </span>
            </div>
            <p>
              Yes! My personal website is also one of my projects, built with
              React and deployed on AWS S3, with a custom domain name,
              certificate managed by AWS Route 53, and the content is cached by
              AWS CloudFront.
            </p>
          </div>
          <video src={houseVideo} autoPlay loop muted></video>
        </div>
        <div className="content-kubernetes">
          <img src={kube} alt="kubernetes" />
          <div className="content-intro-text content-kub">
            <div className="lable-text">
              Cloud-Native Weather Explorer: A Kubernetes-Driven Microservices
              Application
            </div>
            <span className="content-intro-text-lable">
              <Link to={"https://github.com/RicardoYam/WeatherExplorer"}>
                View this project
              </Link>
            </span>
            <p>
              This project is a comprehensive, highly scalable, and rapidly
              deployable weather exploration platform, recognized as one of the
              top projects in the UQ Cloud Computing course. Utilizing a variety
              of popular frameworks and technologies such as Vue, Spring Boot,
              MySQL, Docker, and Kubernetes, it perfectly showcases my expertise
              and capabilities in full-stack development and DevOps
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default root;
