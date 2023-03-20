import "./App.css";
import mainlogo from "./assests/main.gif";
import React, { useState } from "react";
import Crd from "./component/Crd";
import styled from "styled-components";
import About from "./component/About";
import FooterSocial from "./component/FooterSocial";
import TransitionsModal from "./component/Modal";
import Navbar from "./component/Navbar";
import "react-dropzone-uploader/dist/styles.css";
import { createContext, useContext } from "react";
import Score from "./component/Score";

export const MyContext = createContext({});
function App() {
  const [urlobj, seturlobj] = useState({
    imgtotext: false,
    wordtotext: false,
    pdftotext: false,
    imagefeature: false,
    handwritten: false,
    normal: false,
  });
  const [open, setOpen] = React.useState(false);
  const [score, setscore] = React.useState(0);
  const [showscore,setshowscore]=useState(false)

  return (
    <MyContext.Provider value={{ urlobj, seturlobj, open, setOpen,score,setscore,showscore,setshowscore }}>
      <Appcontainer>
        <Navbar />
        <Score />
        <TransitionsModal />
        <div className="maincontainer">
          <div className="leftmain">
            <Crd type={"imgtotext"} />
            <Crd type={"wordtotext"} />
            <Crd type={"pdftotext"} />
            <Crd type={"imagefeature"} />
            <Crd type={"handwritten"} />
            <Crd type={"normal"} />
          </div>
          <div className="rightmain">
            <img src={mainlogo} alt="" srcset="" />
          </div>
        </div>
        <About />
      </Appcontainer>
    </MyContext.Provider>
  );
}
const Appcontainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  .maincontainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 990px) {
    .maincontainer {
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
  .rightmain img {
    width: 100%;
    height: 100%;
  }
`;

export default App;
