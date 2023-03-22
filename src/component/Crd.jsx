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
    console.log(urlobj)
  }
  return (
    <>
    <div className="crd">
      <div className="card">
        <div className="upper-container">
          <div className="image">
            <img
              src={props.image}
              alt=""
              height="100px"
              width="100px"
            />
          </div>
        </div>
        <div className="lower-container">
          <h3>
            {props.name}
          </h3>
          <button onClick={handleclick}>{props.type}</button>
        </div>
      </div>
    </div>
    
   
   
   </>
  )

}

export default Crd;
