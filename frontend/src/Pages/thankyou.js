import React from "react";
import "../css/thankyou.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiTicktick } from "react-icons/si";
import img1 from '../image/thankyou.png';
import thankimg from "../image/thankyou.jpg";


function Thanks() {
  return (
    <div>
      <a href="/"> <button className="logout">Log Out</button></a>
      <img src={thankimg}
      className="thank"></img>
    <div className="text">
      
      <div className="image">
       <img src={img1}></img>
      </div>
      <div className="content">
        <SiTicktick className="icon" />
        <h1>Thanks you!</h1>
        <p>The form was submitted successfully.</p>
      </div>
    </div>
    </div>
  );
}

export default Thanks;