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
    const [user,setUser]=useState([])
    const [acct,setAcc]=useState([])
    const [felt,setFelt]=useState([])
    const [avi,setAvi]=useState([])
    const [nash,setNash]=useState([])

    useEffect(()=>{
       axios.get("http://localhost:9000/feedbackpersubject")
       .then((combinedData) => {
        setUser(combinedData.data.peer);
        setAcc(combinedData.data.deer);
        setFelt(combinedData.data.heer);
        setAvi(combinedData.data.keer);
        setNash(combinedData.data.teer);
      })
       .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <Container fluid className="sub">
        <Row>
          <Col className="subleft" xs={2}  >
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
          <div className="technical">
            <h3>Technical Training Feedback</h3>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Rating 1</th>
                            <th>Rating 2</th>
                            <th>Rating 3</th>
                            <th>Rating 4</th>
                            <th>Rating 5</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(item=>{
                                return <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Admission}</td>
                                    <td>{item.Subject}</td>
                                    <td>{item.Descript}</td>
                                    <td>{item.rat1}</td>
                                    <td>{item.rat2}</td>
                                    <td>{item.rat3}</td>
                                    <td>{item.rat4}</td>
                                    <td>{item.rat5}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
          </div>
          <div className="math">
            <h4>Mathematics Feedback</h4>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>                       
                            <th>Rating 1</th>
                            <th>Rating 2</th>
                            <th>Rating 3</th>
                            <th>Rating 4</th>
                            <th>Rating 5</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            acct.map(Row=>{
                                return <tr>
                                    <td>{Row.Name}</td>
                                    <td>{Row.Admission}</td>
                                    <td>{Row.rat1}</td>
                                    <td>{Row.rat2}</td>
                                    <td>{Row.rat3}</td>
                                    <td>{Row.rat4}</td>
                                    <td>{Row.rat5}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
          </div>
          <div className="daa">
            <h4>DAA Feedback</h4>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>                       
                            <th>Rating 1</th>
                            <th>Rating 2</th>
                            <th>Rating 3</th>
                            <th>Rating 4</th>
                            <th>Rating 5</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            felt.map(tro=>{
                                return <tr>
                                    <td>{tro.Name}</td>
                                    <td>{tro.Admission}</td>
                                    <td>{tro.rat1}</td>
                                    <td>{tro.rat2}</td>
                                    <td>{tro.rat3}</td>
                                    <td>{tro.rat4}</td>
                                    <td>{tro.rat5}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
          </div>
          <div className="ops">
            <h4>Operating System Feedback</h4>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>                       
                            <th>Rating 1</th>
                            <th>Rating 2</th>
                            <th>Rating 3</th>
                            <th>Rating 4</th>
                            <th>Rating 5</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            avi.map(cro=>{
                                return <tr>
                                    <td>{cro.Name}</td>
                                    <td>{cro.Admission}</td>
                                    <td>{cro.rat1}</td>
                                    <td>{cro.rat2}</td>
                                    <td>{cro.rat3}</td>
                                    <td>{cro.rat4}</td>
                                    <td>{cro.rat5}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
          </div>
          <div className="coa">
            <h4>COA Feedback</h4>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admission</th>                       
                            <th>Rating 1</th>
                            <th>Rating 2</th>
                            <th>Rating 3</th>
                            <th>Rating 4</th>
                            <th>Rating 5</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            nash.map(fro=>{
                                return <tr>
                                    <td>{fro.Name}</td>
                                    <td>{fro.Admission}</td>
                                    <td>{fro.rat1}</td>
                                    <td>{fro.rat2}</td>
                                    <td>{fro.rat3}</td>
                                    <td>{fro.rat4}</td>
                                    <td>{fro.rat5}</td>
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