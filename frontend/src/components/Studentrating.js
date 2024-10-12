// import Leftpannel from "./leftpannel"
import Header from "./header"
import "./leftpal.css"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect ,useState } from "react";
import axios from "axios";
import { BiSolidDashboard } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";
import { GrCatalog } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdMargin } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
const Subjectfeedback =()=>{
    const [ratOne,setratOne]=useState([])
    const [ratTwo,setratTwo]=useState([])
    const [ratThree,setratThree]=useState([])
    const [ratFour,setratFour]=useState([])
    const [ratFive,setratFive]=useState([])
    

    useEffect(()=>{
       axios.get("http://localhost:9000/rating")
       .then((combinedData) => {
        setratOne(combinedData.data.aeer);
        setratTwo(combinedData.data.beer);
        setratThree(combinedData.data.ceer);
        setratFour(combinedData.data.geer);
        setratFive(combinedData.data.meer);
      })
       .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <Container fluid className="sub">
        <Row>
          <Col className="ratleft" xs={2}  >
          <ul className="lp">
          <a href="/student"><li id="dash"><span><BiSolidDashboard></BiSolidDashboard> </span>Dashboard</li></a>
          <a href="/student"><li><span><TiDocumentText></TiDocumentText> </span>Students</li></a>
            <a href="/feedbackpersubject"><li><span><VscFeedback /> </span>Feedback</li></a>
            <a href="/signup"><li><span><HiOutlineUserGroup /> </span>Add Credentials</li></a>
            <a href="/rating"><li><span><FaRankingStar /> </span>Rating</li></a>
            {/* <li><span><MdOutlineSettingsSystemDaydream />  </span>CMS</li>
            <li><span><PiSpeakerHighDuotone /> </span>Maeketing</li>
            <li><span><MdOutlineReportGmailerrorred /> </span>Reporting</li>
            <li><span><FiSettings /> </span>Settings</li>
            <li><span><GrConfigure /> </span>Configure</li> */}
            
          </ul>
          
          
          </Col>
          <div className="ratting1">
            <h3>One Star Rating</h3>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>
                            <th>Subject</th>
                            <th>Description</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            ratOne.map(item=>{
                                return <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Admission}</td>
                                    <td>{item.Subject}</td>
                                    <td>{item.Descript}</td>
                                    
                                </tr>
                            })
                        }
                    </tbody>
                </table>
          </div>
          <div className="ratting2">
            <h3>Two Star Rating</h3>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>
                            <th>Subject</th>
                            <th>Description</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            ratTwo.map(Row=>{
                                return <tr>
                                    <td>{Row.Name}</td>
                                    <td>{Row.Admission}</td>
                                    <td>{Row.Subject}</td>
                                    <td>{Row.Descript}</td>
                                    
                                </tr>
                            })
                        }
                    </tbody>
                </table>
          </div>
          <div className="ratting3">
            <h4>Three Star Rating</h4>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>
                            <th>Subject</th>
                            <th>Description</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            ratThree.map(fat=>{
                                return <tr>
                                    <td>{fat.Name}</td>
                                    <td>{fat.Admission}</td>
                                    <td>{fat.Subject}</td>
                                    <td>{fat.Descript}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
          </div>
          <div className="ratting4">
            <h4>Four Star Rating</h4>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>
                            <th>Subject</th>
                            <th>Description</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            ratFour.map(sat=>{
                                return <tr>
                                    <td>{sat.Name}</td>
                                    <td>{sat.Admission}</td>
                                    <td>{sat.Subject}</td>
                                    <td>{sat.Descript}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
          </div>
          <div className="ratting5">
            <h4>Five Star Rating</h4>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>
                            <th>Subject</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ratFive.map(tat=>{
                                return <tr>
                                    <td>{tat.Name}</td>
                                    <td>{tat.Admission}</td>
                                    <td>{tat.Subject}</td>
                                    <td>{tat.Descript}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
          </div>

          </Row>
      </Container>









            {/* <Header></Header>
            
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

              
            </div> */}
      
      
        </div>
  
    )
}
export default Subjectfeedback;