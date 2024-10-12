import Leftpannel from "./leftpannel"
import Header from "./header"
import "./leftpal.css"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { BiSolidDashboard } from "react-icons/bi";
// import { TiDocumentText } from "react-icons/ti";
// import { GrCatalog } from "react-icons/gr";
// import { HiOutlineUserGroup } from "react-icons/hi2";
// import { MdMargin } from "react-icons/md";
import { useEffect ,useState } from "react";
import axios from "axios";
// import { TbMarquee } from "react-icons/tb";
import credimg from "../image/credential.jpg"

const Students =()=>{
    const [user,setUser]=useState([])
    useEffect(()=>{
       axios.get("http://localhost:9000/student")
       .then(user=>setUser(user.data))
       .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <Header></Header>
            
      <Container fluid className="leftpal">
        <Row>
            <Col className= "leftpannel" xs={3}>
            <Leftpannel></Leftpannel>
                </Col> 
          
          <Col className="content" xs={9}>
           <h5><b>Credentials Of students</b></h5>
            <p >Quickly Review what's going on.....  It's important for Us to maintain<br></br> accurate and updated credentials throughout their educational and professional journey.</p>
            <hr></hr>
            <br></br>
            <h5 className="idpass">Id/Password of Each Students</h5>
            <div className="overall">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(item=>{
                                return <tr>
                                    <td>{item.name}</td>
                                    <td>{item.addmision}</td>
                                    <td>{item.password}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

              
            </div>
           
            {/* <br></br> */}
            {/* <h6>Today's Details</h6>
            <div className="tday_details">
              
            </div> */}
          </Col>
        </Row>
      </Container>
      <div className="credimg">
      <img src={credimg}
      className="cred"></img>
        
      </div>
      
    </div>
  
    )
}
export default Students;