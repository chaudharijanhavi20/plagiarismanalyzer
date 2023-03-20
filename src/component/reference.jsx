import React, { useState } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MyContext } from "../App";
import CloseIcon from "@mui/icons-material/Close";
export default function Referencecomp() {
  const {
    score,
    showscore,
    setshowscore,
    showreference,
    setshowreference,
    referencedata,
    setreferencedata,
  } = React.useContext(MyContext);
  console.log(referencedata);
  let emoji = "";

  return (
    <Scorecomponent style={{ display: showreference ? "flex" : "none" }}>
      <div className="icon" onClick={() => setshowreference(!showreference)}>
        <CloseIcon />
      </div>
      <div className="leftmain" style={{ width: 200, height: 200 }}>
        <h1>
          Pdf Summary <br /> {referencedata.referencemetadata?.Title}
        </h1>
        <p>
          Author : {referencedata.referencemetadata?.Author} <br /> Company :{" "}
          {referencedata.referencemetadata?.Company} <br /> Pdf Pages :{" "}
          {referencedata.referencemetadata?.Pages}
        </p>
      </div>
      <div className="rightmain">
        {referencedata.referencedict?.url.map((a, index) => {
         return (
            <div>
            <a href={a} target="_blank" rel="noopener noreferrer">{a}</a>
          </div>
          );
        })}
      </div>
    </Scorecomponent>
  );
}
const Scorecomponent = styled.div`
  background-color: #191825;
  width: 800px;
  height: 450px;
  overflow-y: auto;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 5rem;
  left: 20%;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 5px #48abe0, 0 0 20px 7px #ebecca, 0 0 15px 15px #8a2be2;
  @media (max-width: 990px) {
    width: 80% !important;
    margin: 1rem;
    height: 400px;
    left: 0;
    .leftmain {
      width: 100% !important;
    }
  }
  .icon {
    position: absolute;
    left: 90%;
    top: 5%;
    color: #8a2be2;
    font-size: 2rem;
  }
  .leftmain {
    width: 100% !important;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rightmain {
    width: 100% !important;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

  }
  .rightmain div{
    padding: 1rem;
    background-color: #8a2be2;
    margin: 0.2rem;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rightmain div a{
    color: white;
    text-decoration: none;
    font-weight: bold;
    
  }
`;
