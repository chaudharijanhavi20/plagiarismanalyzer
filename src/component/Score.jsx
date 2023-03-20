import React, { useState } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MyContext } from "../App";
import CloseIcon from '@mui/icons-material/Close';
export default function Score() {
    const { score,showscore,setshowscore,showreference,setshowreference,referencedata,setreferencedata } = React.useContext(MyContext);
    
    let emoji=''
    if(score<20){
        emoji='😎'
    }else if(score<40){
        emoji='😉'
    }else if(score<60){
        emoji='😊'
    }else if(score<80){
        emoji='🙂'
    }else{
        emoji='😥'
    }
  return (
    <Scorecomponent style={{display:showscore?'flex':'none'}}>
        <div className="icon" onClick={()=>setshowscore(!showscore)}>
            <CloseIcon />
        </div>
      <div className="leftmain" style={{ width: 200, height: 200 }}>
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 2,
            pathColor: `rgba(62, 152, 199, ${66 / 100})`,
            textColor: "#865DFF",
            trailColor: "#865DFF",
            backgroundColor: "#865DFF",
          })}
        />
      </div>
      <div className="rightmain">
        <h2>Your Score {emoji}</h2>
        <h4>{score>80?'Your content is plagarised!!':score<40?'No Worry your content is plagarised':'You were close to get plagarised'}</h4>
      </div>
    </Scorecomponent>
  );
}
const Scorecomponent = styled.div`
  background-color: #191825;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 5rem;
  left: 40%;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 5px #48abe0,
              0 0 20px 7px #ebecca,
              0 0 15px 15px #8a2be2;
  @media (max-width:990px) {
    width: 80% !important;
    margin: 1rem;
    left: 0;
    .leftmain{
        width: 50% !important;
    }
  }
  .icon{
    position: absolute;
    left: 90%;
    top: 5%;
    color: #8a2be2;
    font-size: 2rem;
  }
  .leftmain{
    width: 50%;
  }
  .rightmain{
    width: 50%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

  }
`;
