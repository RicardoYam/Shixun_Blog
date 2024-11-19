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
import ReactPlayer from "react-player";
import calmpetVideo from "/images/calmpet.mp4";
import Pokemon from "/images/Pokemon.jpg";
import MeetHome from "/images/meet-home.png";
import MeetLogin from "/images/meet-login.png";
import MeetProfile from "/images/meet-profile.png";
import FlappyBird from "/images/flappy-bird.mp4";

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

        <div className="left-content-right-image">
          <div className="text-content">
            <div className="lable-text">Meet Community</div>
            <span className="content-intro-text-lable">
              <Link
                to={"https://meet-community.top"}
                style={{ marginRight: "20px", color: "#11ee72" }}
              >
                Visit Now
              </Link>
              <Link to={"https://github.com/RicardoYam/Meet"}>
                View this project
              </Link>
            </span>
            <p>
              Meet is an open-source blogging and life-sharing community where
              people can connect and engage with one another. Powered by robust
              features and deployed on AWS, it integrates a reliable Java Spring
              Boot backend with an engaging React frontend. Visit our site and
              register today to start your journey!
            </p>
          </div>

          <div className="image-content">
            <Slider images={[MeetLogin, MeetHome, MeetProfile]} />
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
                Visit Now
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

        <div className="content-twoprojects">
          <div className="project-item">
            <div className="project-video">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=-ATo4BN_158"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <div className="project-info">
              <div className="project-info-header">
                <div className="lable-text">Pigeon</div>
                <div className="content-intro-text-lable"></div>
              </div>
              <p>
                A real-time chat application built with Next.js and Python
                Flask, secured with JWT and cryptography methods to ensure
                secure communication between clients. Using Docker and Terraform
                to automate the deployment process on AWS.
              </p>
            </div>
          </div>

          <div className="project-item">
            <div className="project-video">
              <video
                src={calmpetVideo}
                controls
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  border: "1px solid #2d2d2d",
                }}
              />
            </div>
            <div className="project-info">
              <div className="project-info-header">
                <div className="lable-text">CalmPet</div>
                <div className="content-intro-text-lable">
                  <Link to={"https://github.com/YuyangisCoding/calmPet-final"}>
                    View this project
                  </Link>
                </div>
              </div>
              <p>
                CalmPet aims to ensure every child receives the best quality
                education by reducing disruptions during classroom transition
                times and therefore improving the efficiency of learning
                processes. Project is built with Flutter and Spring Boot for
                Android and iOS devices, so that teachers and students can use
                it on the go.
              </p>
            </div>
          </div>
        </div>

        <div className="content-kubernetes">
          <div className="content-intro">
            <video
              src={FlappyBird}
              autoPlay
              loop
              muted
              style={{ width: "50%" }}
            />
            <div className="cotent-intro-text">
              <div className="lable-text">Flappy Bird</div>
              <span className="content-intro-text-lable"></span>
              <p>
                A Flappy Bird game built with C# and Unity, with a simple and
                intuitive interface.
              </p>
            </div>
          </div>
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
              deployable weather exploration platform on Google Cloud Platform
              (GCP), recognized as one of the top projects in the UQ Cloud
              Computing course. Utilizing a variety of popular frameworks and
              technologies such as Vue, Spring Boot, MySQL, Docker, and
              Kubernetes, it perfectly showcases my expertise and capabilities
              in full-stack development and DevOps.
            </p>
          </div>
        </div>
        <div className="content-kubernetes">
          <div className="content-intro">
            <img src={Pokemon} alt="pokemon" style={{ width: "50%" }} />
            <div className="cotent-intro-text">
              <div className="lable-text">Pokemon: Got 2 Find Them All!</div>
              <span className="content-intro-text-lable">
                <Link to={"https://github.com/RicardoYam/pokemon"}>
                  View this project
                </Link>
              </span>
              <p>
                A minesweeper game built by Python, with a simple and intuitive
                GUI features. All Pokémon trainer love this game!
              </p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default root;
