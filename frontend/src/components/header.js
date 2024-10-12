import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GoSearch } from "react-icons/go";
import { MdDarkMode } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import img1 from"./WhatsApp Image 2024-02-27 at 17.36.12_bd00f4bc.jpg"

import"../components/header.css"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Searchbar from "../components/searchbar"

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nbar">
      <Container fluid>
        <Navbar.Brand href="#">
        {/* <img
              src={img1}
              width="10"
              height="10"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Searchbar></Searchbar> */}
            <Form className="d-flex search_width">
          
          
            <Form.Control
              icon={<GoSearch />}
              type="search"
              
              placeholder=" Search"
              className="me-2" 
              aria-label="Search"
              size='md'
            
            />
            
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>


          </Nav>
          
                  <MdDarkMode className='nav_icon' />
                  <SiHomeassistantcommunitystore className='nav_icon'/>
                  <IoIosNotificationsOutline className='nav_icon' />
                  <a href="/completeprofile"> <FaCircleUser className='nav_icon'/></a>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;