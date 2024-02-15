import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import './root.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom';
import logoBanner from '/images/logo-banner.png'
import houseVideo from '/images/fashion.mp4'
import kube from '/images/weather-explorer.jpg'
import todolist from '/images/todolist.jpg'
import mnist from '/images/Mnist.png'
import stock from '/images/StockPrediction.png'

function root() {
  return (
    <>
      <div className='header'><Navbar /></div>
      <div className='content'>
        <div className="banner">
          <h1>Hello,</h1>
          <h1>Nice to meet you</h1>
          <div className='content-contact'>
            <IoIosArrowRoundForward style={{ color: 'white', margin: '30px' }} size='130px' />
            <div className='content-contact-item'>
              <p>Front-end &</p>
              <p>Back-end development</p>
            </div>
            <div className='content-contact-item'>
              <p>Data Analysis</p>
            </div>
            <div className='content-contact-item'>
              <p>Contact:</p>
              <p>lishixun1219@gmail.com</p>
              <a href="https://www.linkedin.com/in/shixun-li-669a4b287/"><FaLinkedin style={{ color: 'white', marginTop: '10px', marginRight: '10px' }} size='30px' /></a>
              <a href="https://github.com/RicardoYam"><FaGithub style={{ color: 'white', marginTop: '10px', marginRight: '10px' }} size='30px' /></a>
              <a href="https://leetcode.com/RicardoOVO/"><SiLeetcode style={{ color: 'white', marginTop: '10px' }} size='30px' /></a>
            </div>
          </div>
        </div>
        <div className='content-intro'>
          <div className="cotent-intro-text">
            <img src={logoBanner} alt="intro-image" />
            <div className="content-intro-text-lable">
              <div className='lable-text'>www.shixunli.com</div>
              <span><Link to={"https://github.com/RicardoYam/Shixun_blog"}>View this project</Link></span>
            </div>
            <p>My personal website is a harmonious blend of React-based projects deployed on AWS, showcasing my proficiency and diverse expertise across various programming languages and frameworks. It serves as a testament to my technical abilities and deep understanding of software development.</p>
          </div>
          <video src={houseVideo} autoPlay loop muted></video>
        </div>
        <div className="content-kubernetes">
          <img src={kube} alt="kubernetes" />
          <div className="content-intro-text content-kub">
            <div className='lable-text'>Cloud-Native Weather Explorer: A Kubernetes-Driven Microservices Application</div>
            <span className='content-intro-text-lable'><Link to={"https://github.com/RicardoYam/WeatherExplorer"}>View this project</Link></span>
            <p>This project is a comprehensive, highly scalable, and rapidly deployable weather exploration platform, recognized as one of the top projects in the UQ Cloud Computing course. Utilizing a variety of popular frameworks and technologies such as Vue, Spring Boot, MySQL, Docker, and Kubernetes, it perfectly showcases my expertise and capabilities in full-stack development and DevOps</p>
          </div>
        </div>
        <div className="content-twoprojects">
          <div className="leftproject">
            <div className="content-kubernetes">
              <img src={todolist} alt="todolist" />
              <div className="content-intro-text content-kub">
                <div className='lable-text'>TaskMaster: A Streamlined React To-Do List Application</div>
                <span className='content-intro-text-lable'><Link to={"https://github.com/RicardoYam/TodoList"}>View this project</Link></span>
                <p>A Beginner-Friendly React Project: Designed to guide novices through the fundamentals of React, this project focuses on imparting a solid understanding of core concepts such as utilizing React hooks, integrating external libraries, and applying CSS styling. It serves as an excellent starting point for those new to React, offering hands-on experience with its essential features and principles.</p>
              </div>
            </div>
          </div>
          <div className="rightproject">
          <div className="content-kubernetes">
          <img src={mnist} alt="Mnist" />
          <div className="content-intro-text content-kub">
            <div className='lable-text'>Handwriting Harmony: A Simple Neural Network Project on the MNIST Database</div>
            <span className='content-intro-text-lable'><Link to={"https://github.com/RicardoYam/HandwrittingPrediction"}>View this project</Link></span>
            <p>A straightforward neural network project designed to facilitate learning of the fundamental training and prediction processes, while becoming proficient with the functionalities and uses of various packages within the Keras library. The project achieves a prediction accuracy of up to 99%, offering a practical introduction to neural networks through hands-on experience.</p>
          </div>
        </div>
          </div>
        </div>
        <div className="content-kubernetes">
          <img src={stock} alt="Stock" />
          <div className="content-intro-text content-kub">
            <div className='lable-text'>Market Predictor: Mastering Financial Forecasting with Neural Networks and LSTM</div>
            <span className='content-intro-text-lable'><Link to={"https://github.com/RicardoYam/StockPrediction"}>View this project</Link></span>
            <p>A meticulously crafted time series forecasting project, aimed at elucidating the core principles of data preprocessing, analysis, and predictive modeling within the financial domain. By employing a combination of neural networks and Long Short-Term Memory (LSTM) models, the initiative underscores the strategic utilization of the TensorFlow and Keras libraries to navigate the complexities of stock market data. This endeavor not only showcases an impressive prediction accuracy but also serves as an immersive guide for those keen on mastering the intricacies of machine learning algorithms and their application in forecasting future market trends.</p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default root