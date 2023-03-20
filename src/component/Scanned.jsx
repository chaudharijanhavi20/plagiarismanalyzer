import React, { useState } from "react";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { MyContext } from "../App";
import CloseIcon from "@mui/icons-material/Close";
export default function Scanneddoc() {
  const {
    showreference,
    setshowreference,
    scannedtext,setscannedtext,showscannedtext,showsetscannedtext
  } = React.useContext(MyContext);
  let emoji = "";
  console.log(scannedtext)

  return (
    <Scorecomponent style={{ display: showscannedtext ? "flex" : "none" }}>
      <div className="icon" onClick={() => showsetscannedtext(!showscannedtext)}>
        <CloseIcon />
      </div>
      <div className="leftmain" style={{ width: 200, height: 200 }}>
            <h3>{scannedtext}</h3>
      </div>
    </Scorecomponent>
  );
}
const Scorecomponent = styled.div`
  background-color: #191825;
  width: 600px;
  height: 350px;
  overflow-y: auto;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 5rem;
  left: 30%;
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
  .leftmain h3{
    margin: 0;
  }
`;
