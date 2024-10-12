import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import { FaUserAlt, FaUnlock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
// import Signup from './signup';
// import {Link} from 'react-router-dom';
// import Signup from './signup';
import logimg from "../image/login.jpg";

function Signin() {
  const history = useNavigate();
  const [addmision,setAddmision]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:9000/",
        {addmision,password}
      )
      .then(res=>{
        // console.log("hii");
        if(res.data=="exist"){
         alert(" login successful")
         history("/feedback")
        }
        else if(res.data=="notexist"){
          alert("Sign up first !")
          history("/signup")
        }

      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
      })

    }

    catch(e){
      console.log(e);
      
    }

    
  }
  return (
    <div>
       
   
    <MDBContainer fluid className='log'>


      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol className='col1' col='12'>
          <img src={logimg}
          className='logi'></img>

          <MDBCard className='text-white card topform' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-100 w-100'>

              <h2 className="fw-bold mb-2 text-uppercase ttext">Login</h2>
              <p className="text-center ttext1 mb-5 text-sm-start"><span><b>Student</b></span> <span className='admin'><a href="/admin" > <b>Admin</b></a></span></p>

              <form action='POST'>
                <div className="input-icon">
                  <MDBInput onChange={(e)=>{setAddmision(e.target.value)}} wrapperClass='mt-3 w-100' labelClass='text-white' placeholder="Admission No." id='formControlLg' type='email' size="lg" icon="user" />
                  <FaUserAlt className='text-dark mt-3 fs-5 fs-6' />
                </div>

                <div className="input-icon">
                  <MDBInput onChange={(e)=>{setPassword(e.target.value)}} wrapperClass='mt-4 w-100 ' labelClass='text-white' placeholder="Password" id='formControlLg' type='password' size="lg" icon="user" />
                  <FaUnlock className='text-dark mt-3 fs-5 fs-6' />
                </div>
                
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className='small me-3 pb-lg-3 ttext1' >
                  <MDBCheckbox label="Remember Me" id="flexCheckDefault" containerClass="ttext1" />
                  </div>
                  {/* <div className='fgpass'>
                    <p className="small ms-3 pb-lg-2">
                      <a className="ttext1" href="#!">Forgot password?</a>
                    </p>
                  </div> */}
                </div>

                

                <button onClick={submit} className='w-100 p-2 login-btn btn btn-light btn-lg btn-block' color='white'><a href="!#" className=' fw-bold mx-2 px-3 login-btnx '>Login</a></button>
              </form>

              {/* <div>
                <p className="mt-1">Don't have an account? 

                <a href="./signup" className="text-center text-white signup-btn mb-4">Sign Up</a>
                </p>

              </div> */}
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Signin;