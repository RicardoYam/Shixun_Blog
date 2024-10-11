import React from "react";
import "./certificates.css";
import saa from "/images/aws-certified-solutions-architect-associate.png";
import da from "/images/aws-certified-developer-associate.png";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

export default function certificates() {
  return (
    <div>
      <div className="header">
        <Nav />
      </div>
      <div className="certification-content">
        <div className="certification">
          <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/a6a86f5cc8324c46837d3851edeb9b81">
            <img
              src={saa}
              alt="AWS Solutions Architect Associate Certification"
            />
          </a>
          <p>Solutions Architect</p>
          <p>Associate</p>
        </div>

        <div className="certification">
          <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/1ac14f1a14c645b284c4eed82a42e9cc">
            <img src={da} alt="AWS Developer Associate Certification" />
          </a>
          <p>Developer</p>
          <p>Associate</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
