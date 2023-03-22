import "./App.css";

import React, { useState } from "react";
import Crd from "./component/Crd";
import styled from "styled-components";
import About from "./component/About";
import TransitionsModal from "./component/Modal";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import imagetotext from "./assests/imagetotext.png";
import imagefeature from "./assests/imagefeature.png";
import pdftotext from "./assests/pdftotext.png";
import wordtotext from "./assests/wordtotext.png";
import handwritten from "./assests/handwritten.png";
import texttoplagiarism from "./assests/texttoplagiarism.png";
import reference from "./assests/reference.png";
import mergepdf from "./assests/mergepdf.png";
import scanpdf from "./assests/scanpdf.png";
import exactpdf from "./assests/exactpdf.png";
import { createContext, useContext } from "react";
import Score from "./component/Score";
import Footer from "./component/Footer"
import Referencecomp from "./component/reference";
import Scanneddoc from "./component/Scanned";
import File from "./component/File";

export const MyContext = createContext({});
function App() {
  const [urlobj, seturlobj] = useState({
    imgtotext: false,
    wordtotext: false,
    pdftotext: false,
    imagefeature: false,
    handwritten: false,
    normal: false,
    getreference: false,
    pdfmerge: false,
    scannedpdf: false,
    extractimage: false,
  });
  const [open, setOpen] = React.useState(false);
  const [score, setscore] = React.useState(0);
  const [showscore,setshowscore]=useState(false)
  const [showreference,setshowreference]=useState(false)
  const [referencedata,setreferencedata]=React.useState("")
  const [scannedtext,setscannedtext]=useState("")
  const [showscannedtext,showsetscannedtext]=useState("")
  return (
    <MyContext.Provider value={{ urlobj, seturlobj, open, setOpen,score,setscore,showscore,setshowscore ,showreference,setshowreference,referencedata,setreferencedata,scannedtext,setscannedtext,showscannedtext,showsetscannedtext}}>
      <Appcontainer>
        <Navbar />
        <Referencecomp />
        <Scanneddoc />
        <Home/>
        <Score />
        <TransitionsModal />
        
        <div className="heads">
        <h1>Upload File You Want to Plagiarised</h1>
        </div>
           <div className="cardcontainer">
           <Crd type={"imgtotext"} name={"Convert image to text"} image={imagetotext}/>
            <Crd type={"wordtotext"} name={"Convert Word to text"} image={wordtotext}/>
            <Crd type={"pdftotext"} name={"Convert pdf to text"} image={pdftotext}/>
            <div className="another">
            <Crd type={"imagefeature"} name={"floewchart to text"} image={imagefeature}/>
            <Crd type={"handwritten"} name={"Handwritten Plagiarism"} image={handwritten}/>
            <Crd type={"normal"} name={"Wite text to plagiarised"} image={texttoplagiarism}/>
            </div>
            {/* <Crd type={"getreference"} name={"Convert image to text"} image={reference}/>
            <Crd type={"pdfmerge"} name={"PDF Merge"} image={mergepdf}/>
            <Crd type={"scannedpdf"} name={"Scann PDF"} image={scanpdf}/>
            <Crd type={"extractimage"} name={"Extract Image"} image={exactpdf}/> */}
            
           </div>
      <div className="files">
      <h1>Play With PDFs</h1>
      <div className="middle">
       <File/>
       </div>
       </div>
   
        <About />
        
        <Footer/>
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
  .maincontainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cardcontainer{
    display: flex;
    flex-wrap: wrap;
    gap: 7rem;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    
  }
  .another{
    display: flex;
    flex-wrap: wrap;
    gap: 7rem;
    justify-content: center;
    align-items: center;
    margin: 2rem;
   padding: 3rem;
   margin-top: 2rem;
  }
.heads{
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  margin-right: 18rem;
}
  .files{
    width: 100%;
    height: 30%;
    background-color: #191825;
    height: 30vh;
    align-items: center;
  }

  .files h1{
    color: #865DFF;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
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
    .cardcontainer{
    gap:2rem;
  }
  .heads{
    margin-right: 0.1rem;
  }
  }
  
  
`;

export default App;
