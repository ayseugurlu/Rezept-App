import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import NavDiv, { LogoDiv, MyNavLink } from "./style";

const Navbar = () => {
  return (
    
      
        <NavDiv>
        
        <LogoDiv logo>
        
          <MyNavLink logo to="/">
            <img src={logo} alt="" width="200px" />
          </MyNavLink>

          </LogoDiv>
         

          <div>
            <ul>
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
            </ul>
          </div>

        </NavDiv>
      
  );
};

export default Navbar;
