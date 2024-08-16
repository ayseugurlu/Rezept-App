import React, { useState } from "react";
import logo from "../../assets/logo.png";
import NavDiv, { Hamburger, LogoDiv, Menu, MyNavLink } from "./style";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {

  const [open,setOpen]=useState(true)
  return (
    
      
        <NavDiv>
        
        <LogoDiv logo>
        
          <MyNavLink logo to="/">
            <img src={logo} alt="" width="200px" />
          </MyNavLink>

          </LogoDiv>

          <Hamburger onClick={()=> setOpen(!open)}>
          <RxHamburgerMenu />
          </Hamburger>
         

          <Menu osman={open} onClick={()=> setOpen(!open)}>
            
              <MyNavLink  to="/">
                HOME
              </MyNavLink>
              <MyNavLink  to="/recipes">
                RECIPES
              </MyNavLink>
              <MyNavLink  to="/about">
                ABOUT
              </MyNavLink>
              <MyNavLink  to="/login" >
                LOGIN
              </MyNavLink>
            
          </Menu>

        </NavDiv>
      
  );
};

export default Navbar;
