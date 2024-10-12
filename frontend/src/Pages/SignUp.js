import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox}
from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import { FaUserAlt, FaUnlock } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Leftpannel from "../components/leftpannel"
import { IoMdImage } from "react-icons/io";
import addcred from "../image/add credential.jpg"
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";


function Signup() {
  const history=useNavigate();
  const [addmision,setAddmision]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  // const [image,setImage]=useState('')

  const onNameChangeHandler=(e)=>{
    setName(e.target.value)
    // console.log(addmision)

  }
  // const onImageChangeHandler=(e)=>{
  //   setImage(e.target.value)
  //   // console.log(addmision)

  // }
  const onAddmisionChangeHandler=(e)=>{
    setAddmision(e.target.value)
    // console.log(addmision)

  }
  const onpasswordChangeHandler=(e)=>{
    setPassword(e.target.value)
    // console.log(password)

  }

  let hii = "hii";
  async function submit(e){
    
    e.preventDefault();

    try{
      await axios.post("http://localhost:9000/signup",
        {name,addmision,password}
      )
      .then(res=>{
        console.log("hii");
        if(res.data=="exist"){
         alert("user already exist")
        }
        else if(res.data=="notexist"){
          alert("Sign up Successfully !")
          
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
      <Leftpannel></Leftpannel>
      <img src={addcred}
      className='add'></img>
    
    <MDBContainer fluid>
      

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='  sinupcard topform' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-3 text-uppercase">Sign Up</h2>
              <p className="text-black-50 mb-3 text-sm-center">Provide Us Your Credentials!</p>

              <form action='POST'>
              <div className="input-icon">
                    <MDBInput onChange={onNameChangeHandler} wrapperClass='mt-3 w-100' labelClass='text-white' placeholder="Student Name :" id='formControlLg' type='text' size="lg" icon="user" />
                    <MdOutlineDriveFileRenameOutline className='text-dark mt-3 fs-5 fs-6' />
                  </div>
              {/* <div className="input-icon">
                    <MDBInput onChange={onImageChangeHandler} wrapperClass='mt-3 w-100' labelClass='text-white' placeholder="Student Image:" id='formControlLg' type='url' size="lg" icon="user" />
                    <IoMdImage  className='text-dark mt-3 fs-5 fs-6' />
                  </div> */}
                  <div className="input-icon">
                    <MDBInput onChange={onAddmisionChangeHandler} wrapperClass='mt-3 w-100' labelClass='text-white' placeholder="Admission No." id='formControlLg' type='email' size="lg" icon="user" />
                    <FaUserAlt className='text-dark mt-3 fs-5 fs-6' />
                  </div>

                  

                  <div className="input-icon">
                    <MDBInput onChange={onpasswordChangeHandler} wrapperClass='mt-4 w-100 ' labelClass='text-white' placeholder="Enter Password" id='formControlLg' type='password' size="lg" icon="user" />
                    <FaUnlock  className='text-dark mt-3 fs-5 fs-6' />
                  </div>

                  
                  
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className='small me-3 pb-lg-3' >
                      <MDBCheckbox label="Agree to Our Terms & Condition" id="flexCheckDefault" containerClass="text-white-50" />
                    </div>
                  </div>


                <button onClick={submit} className='w-100 p-2 login-btn btn btn-light btn-lg btn-block' color='black'>Sign Up</button>
              </form>

              <div>
                <p className="mt-1">Already have an account? 
                <a href="/" className="text-center text-white signup-btn mb-4">Login</a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Signup;