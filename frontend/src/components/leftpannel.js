import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./leftpal.css"
import { BiSolidDashboard } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";
import { GrCatalog } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { PiSpeakerHighDuotone } from "react-icons/pi";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { GrConfigure } from "react-icons/gr";
import { Link } from "react-router-dom";
import Students from "./Students";
import { FaRankingStar } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
let leftPannel = () => {
  return (
    <div>
      <Container fluid className="leftpal">
        <Row>
          <Col className="panleft" xs={2}  >
          <ul className="lp">
          <a href="/student"><li id="dash"><span><BiSolidDashboard></BiSolidDashboard> </span>Dashboard</li></a>
            <a href="/student"><li><span><TiDocumentText></TiDocumentText> </span>Students</li></a>
            <a href="/feedbackpersubject"><li><span><VscFeedback /> </span>Feedback</li></a>
            <a href="/signup"><li><span><HiOutlineUserGroup /> </span>Add Credentials</li></a>
            <a href="/rating"><li><span><FaRankingStar /> </span>Rating</li></a>
            {/* <a href="/student"><li><span><HiOutlineUserGroup /> </span>Student/Rating</li></a> */}
            {/* <li><span><MdOutlineSettingsSystemDaydream />  </span>CMS</li>
            <li><span><PiSpeakerHighDuotone /> </span>Maeketing</li>
            <li><span><MdOutlineReportGmailerrorred /> </span>Reporting</li>
            <li><span><FiSettings /> </span>Settings</li>
            <li><span><GrConfigure /> </span>Configure</li> */}
            
          </ul>
          
          
          </Col>
          {/* <Col className="content" xs={9}>
            <h5><b>Hi ! Example</b></h5>
            <p>Quickly Review what's going on your Store</p>
            <br></br>
            <h6>Overall Details</h6>
            <div className="overall">
              
            </div>
            <br></br>
            <h6>Today's Details</h6>
            <div className="tday_details">
              
            </div>
          </Col> */}
        </Row>
      </Container>
      
    </div>
  );
};
export default leftPannel;
