import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { UserProvider } from "./components/Context";
import Home from "./Pages/Home";
import Login from "./Pages/login";
// import PrivateRoute from "./Pages/PrivateRoute";
import Signup from "./Pages/SignUp";
import Thanks from "./Pages/thankyou";
import Dash from "./components/dashboard";
import Students from "./components/Students";
import Subjectfeedback from "./components/Subjectfeedback";
import Studentrating from "./components/Studentrating";
import Admin from "./Pages/Admin";
import Completeprofile from "./components/Completeprofile";
 
function App() {
 return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/feedback" element={<Home />}></Route>
            <Route path="/thankyou" element={<Thanks />}></Route>
            {/* <Route path="/dash" element={<Dash />}></Route> */}
            <Route path="/student" element={<Students />}></Route>
            <Route path="/feedbackpersubject" element={<Subjectfeedback />}></Route>
            <Route path="/rating" element={<Studentrating />}></Route>
            <Route path="/completeprofile" element={<Completeprofile />}></Route>
        </Routes>
      
      </BrowserRouter>
     

 );
}
 
export default App;