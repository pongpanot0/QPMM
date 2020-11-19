/*
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/"> หน้าหลัก </Link>
                <Link to="/about"> เกี่ยวกับเรา </Link> 
                <Link to="/contact"> ติดต่อเรา </Link> 
                <Link to="/products"> สินค้า </Link> 
                <Link to="/profile"> ข้อมูลส่วนตัว </Link> 
            </div>
        )
    }
}
*/

import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import auth from '../componets/firebase';
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
    const [session, setSession] = useState({
      isLoggedIn: true,
      currentUser: null,
      errorMessage: null
    });
  
    useEffect(() => {
      const handleAuth = auth.onAuthStateChanged(user => {
        if (user) {
          setSession({
            isLoggedIn: true,
            currentUser: user,
            errorMessage: null
          });
        }
      });
  
      return () => {
        handleAuth();
      };
    }, []);
  
    const handleLogout = () => {
      auth.signOut().then(response => {
        setSession({
          isLoggedIn: false,
          currentUser: null
        });
      });
    };
  
  return (
    
    <div class="p-3 mb-2 bg-dark text-white" style={{ padding: '.5rem' }}>  
   <p align="right"> {session.currentUser && session.currentUser.email} </p>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/"><img src="./images/logo QPM.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>  
          <NavItem>
              <NavLink tag={Link} to="/Product">หลักสูตร</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/About/">เกี่ยวกับเรา</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Contact">ติดต่อเรา</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink tag={Link} to="/Qa">คำถามที่พบบ่อย</NavLink>
            </NavItem>
          
          </Nav>
        <Nav className="ml-auto" navbar>
   
     
     
        <NavItem>
<NavItem>
              <NavLink tag={Link} to="/Login2">Login</NavLink>
            </NavItem>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;