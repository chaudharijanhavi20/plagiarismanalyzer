import logo from "./logo.svg";
import "./App.css";
import mainlogo from "./assests/main.gif";
import React from "react";
import Crd from "./component/Crd";
import styled from "styled-components";
import About from "./component/About";
import FooterSocial from "./component/FooterSocial";

import Navbar from "./component/Navbar";

function App() {
  return (
    <Appcontainer>
      <Navbar />
      <div className="maincontainer">
        <div className="leftmain">
          <Crd />
          <Crd />
          <Crd />
          <Crd />
          <Crd />
          <Crd />
        </div>
        <div className="rightmain">
          <img src={mainlogo} alt="" srcset="" />
        </div>
      </div>
      <About />
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  .maincontainer{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width:990px) {
    .maincontainer{
      flex-direction: column;
    }
    .leftmain {
    width: 100%;
  }
  .rightmain {
    width: 100% !important;
  }
  }
  .leftmain {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .rightmain {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rightmain img{
    width: 100%;
    height: 100%;
  }
`;

export default App;
