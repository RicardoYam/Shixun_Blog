import React from "react";
import "./certificates.css";
import saa from "/images/aws-certified-solutions-architect-associate.png";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

export default function certificates() {
  return (
    <div>
      <div className="header">
        <Nav />
      </div>
      <div className="content-about">
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
      </div>
      <Footer />
    </div>
  );
}
