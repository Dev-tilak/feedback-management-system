import React, { useState } from "react";
import "../components/completeprofile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Leftpannel from "../components/leftpannel";

const Thanks = () => {
  const [credentials, setCredentials] = useState({ name: "", addmision: "" });
  const [profile, setProfile] = useState('');
  const [record,setRecord] = useState([]);
  
  const onNamechangehandler = (e) => {
    setCredentials({ ...credentials, name: e.target.value });
  };

  const onAddmisionchangehandler = (e) => {
    setCredentials({ ...credentials, addmision: e.target.value });
  };

  const onsubmit = () => {
    axios.post("http://localhost:9000/completeprofile", credentials)
      .then((bothdata) => {
        setProfile(bothdata.data.comp);
        setRecord(bothdata.data.pomp);
        console.log(bothdata.data.comp);
        console.log(bothdata.data.pomp);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="profilecomp">
      <Leftpannel></Leftpannel>
      <div className="box">
        <h2><b>Find Records</b></h2>
        <input
          type="text"
          onChange={onNamechangehandler}
          placeholder="Name"
        ></input>
        <br></br>
        <br></br>
        <input  placeholder="Admission Number"
        onChange={onAddmisionchangehandler}>
         
        </input>
        <br></br>
        <br></br>
        <button onClick={onsubmit} >Summit</button>
      </div>
      <div className="record">
        <h2>Records </h2>
        <img src={profile.image} alt="profileimage"></img>
                   <h4>Name: {profile.name}</h4>
                   <h4>Admisssion: {profile.addmision}</h4>
        
        {/* {
           profile.map(profile=>{
             return <div className="recordCard">
                  
                  </div>              
              })
        } */}
        <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>rat1</th>
                            <th>rat2</th>
                            <th>rat3</th>
                            <th>rat4</th>
                            <th>rat5</th>
                            
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            record.map(row=>{
                                return <tr>
                                    <td>{row.Name}</td>
                                    <td>{row.Admission}</td>
                                    <td>{row.Subject}</td>
                                    <td>{row.Descript}</td>
                                    <td>{row.rat1}</td>
                                    <td>{row.rat2}</td>
                                    <td>{row.rat3}</td>
                                    <td>{row.rat4}</td>
                                    <td>{row.rat5}</td>
                                    
                                </tr>
                            })
                        }
                    </tbody>
                </table>


      </div>
    </div>
  );
};

export default Thanks;