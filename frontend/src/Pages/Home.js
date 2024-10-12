
import React, { useState } from "react";
import '../css/feedback.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import feedimg from "../image/feedback img.jpg"

const Register = () => {
    const history = useNavigate();
    const [review, setReview] = useState({
        Name: '',
        Admission: '',
        Subject: '',
        Descript: '',
        rat1: '',
        rat2: '',
        rat3: '',
        rat4: '',
        rat5: ''
    });

    const onNameChangeHandler = (e) => {
        setReview({ ...review, Name: e.target.value });
    }

    const onAdmissionChangeHandler = (e) => {
        setReview({ ...review, Admission: e.target.value });
    }

    const onSubjectChangeHandler = (e) => {
        setReview({ ...review, Subject: e.target.value });
    }

    const onDescriptChangeHandler = (e) => {
        setReview({ ...review, Descript: e.target.value });
    }

    const onRating1ChangeHandler = (e) => {
        setReview({ ...review, rat1: e.target.value });
    }

    const onRating2ChangeHandler = (e) => {
        setReview({ ...review, rat2: e.target.value });
    }

    const onRating3ChangeHandler = (e) => {
        setReview({ ...review, rat3: e.target.value });
    }

    const onRating4ChangeHandler = (e) => {
        setReview({ ...review, rat4: e.target.value });
    }

    const onRating5ChangeHandler = (e) => {
        setReview({ ...review, rat5: e.target.value });
    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:9000/feedback", { review });
            history('/thankyou'); // Assuming 'success' is the route to navigate after successful submission
        } catch (error) {
            console.log(error);
        }
    }

    const resetForm = () => {
        setReview({
            Name: '',
            Admission: '',
            Subject: '',
            Descript: '',
            rat1: '',
            rat2: '',
            rat3: '',
            rat4: '',
            rat5: ''
        });
    }

    return (
        <div className="App">
           <a href="/"> <button className="logout">Log Out</button></a>
            <img src={feedimg} className="feed"></img>
            <div className="register">
                <h1>Feedback Form</h1>
                <input type="text" onChange={onNameChangeHandler} placeholder="Enter Your Name" value={review.Name} />
                <input type="text" onChange={onAdmissionChangeHandler} placeholder=" Enter Your Admission No." value={review.Admission} />

                <select onChange={onSubjectChangeHandler} id="dropdown" name="dropdown" value={review.Subject}>
                    <option value="option1">Subject</option>
                    <option value="Operating System">Operating System</option>
                    <option value="Math">Math</option>
                    <option value="DAA">DAA</option>
                    <option value="COA">COA</option>
                    <option value="Technical Training">Technical Training</option>
                </select>

                <div className="rating">
                    <h4>Rating:</h4>
                    <input onChange={onRating1ChangeHandler}  type="radio" id="star1" name="rating" value="One star"></input><i class="fa-solid fa-star"></i><br></br>
                    <input onChange={onRating2ChangeHandler} type="radio" id="star2" name="rating" value="Two star"></input><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><br></br>
                    <input onChange={onRating3ChangeHandler} type="radio" id="star3" name="rating" value="Three Star"></input><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><br></br>
                    <input onChange={onRating4ChangeHandler} type="radio" id="star4" name="rating" value="Four star"></input><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><br></br>
                    <input onChange={onRating5ChangeHandler} type="radio" id="star5" name="rating" value="Five star"></input><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><br></br>
    
                </div>

                <textarea onChange={onDescriptChangeHandler} id="description" name="description" rows="4" cols="50" placeholder="Enter your description here..." value={review.Descript}></textarea>
                <div className="button" onClick={submit}>SUBMIT</div>
                <div onClick={resetForm} className="buttonreset">RESET</div>
            </div>
        </div>
    )
}

export default Register;
