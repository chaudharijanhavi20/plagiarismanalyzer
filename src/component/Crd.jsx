import React from "react";
import "./cards.css";
import { MyContext } from "../App";
function Crd(props) {
  const { urlobj, seturlobj, open, setOpen } = React.useContext(MyContext);
  const handleclick=()=>{
    setOpen(!open)
    const updatedObject = Object.keys(urlobj).reduce((result, key) => {
      if (key === props.type) {
        result[key] = true;
      } else {
        result[key] = false;
      }
      return result;
    }, {});
    seturlobj(updatedObject)
  }
  return (
    <>
    <div className="crd">
      <div className="card">
        <div className="upper-container">
          <div className="image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5100/5100994.png"
              alt=""
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <div className="lower-container">
          <p>
            Plagiarism Checker X is one of the most reliable and easy-to-use
            plagiarism detectors on the market.{" "}
          </p>
          <button onClick={handleclick}>{props.type}</button>
        </div>
      </div>
    </div>
    
   
   
   </>
  )

}

export default Crd;
