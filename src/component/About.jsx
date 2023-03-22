import React from "react";
import styled from "styled-components";
import "./about.css";
import image1 from "../assests/image1.png";
import image2 from "../assests/image2.webp";
import image3 from "../assests/image3.gif";

function About() {
  return (
    <Aboutcontainer>
     <div className="head">
      <header>Free Plagiarism Checker: How it Works</header>
      </div>
      <div className="section-container">
     
        <div className="con image1">
          <img src={image1}></img>
        </div>

        <div className="con content">
          <div className="content-container">
            <h1>Enter text into plagiarism detection tool</h1>
            <p>
              We make it simple. Just copy and paste all content from your
              document into our plagiarism checker and hit the ‘Check
              Plagiarism’ button to get started.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="con content">
          <div className="content-container">
            <h1>Evaluate Text for Plagiarism</h1>
            <p>
              Our plagiarism detection tool uses DeepSearch™ Technology to
              identify any content throughout your document that might be
              plagiarized.
            </p>
          </div>
        </div>
        <div className="con image1">
          <img src={image2}></img>
        </div>
      </div>

      <div className="section-container">
        <div className="con image1">
          <img src={image3}></img>
        </div>

        <div className="con content">
          <div className="content-container">
            <h1>Accurate plagiarism results</h1>
            <p>
              After evaluating the text against billions of internet sources,
              you will be provided with a plagiarism score showing the
              percentage of text that is an exact or near-match to existing text
              online.
            </p>
          </div>
        </div>
      </div>
    </Aboutcontainer>
  );
}
const Aboutcontainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  color: black;
  padding: 5rem;
  .con h1 {
    color: #865DFF;
    text-align: center;
  }
  .con p{
    font-size: 1.5rem;
  }
  .section-container{
    background-color: white !important;
  }
  @media (max-width: 990px) {
    padding: 1rem;
    .con p{
    font-size: 1rem;
  }
  }
  .section-container{
    display: flex;
    align-items: center;
  height: 50%;
  width: 100%;
  padding: 2rem;
  margin: auto;
}
.section-container .con{
  display: flex;
  justify-content: center;
  align-items: center;
    flex:  0 0 auto;
    width: 50%;
    
}
@media (max-width:990px) {
  .section-container{
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
  .con{
    width: 100% !important;
  }
  .con img{
    width: 100% !important;
  }
  .content-container{
    width: 100% !important;
    height: 100%;
    }
}
.con img{
height: 100%;
width: 80%;
}
.content-container{
width: 80%;
height: 100%;
}


`;

export default About;
