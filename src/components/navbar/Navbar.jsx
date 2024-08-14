import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import NavDiv, { LogoDiv, MyNavLink } from "./style";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavDiv>
        
        <LogoDiv logo>
        
          <MyNavLink logo to="/">
            <img src={logo} alt="" width="50px" />
            <p>MealMuse</p>
          </MyNavLink>

          </LogoDiv>
         

          <div>
            <ul>
              <MyNavLink className="nav-link"  to="/">
                HOME
              </MyNavLink>
              <MyNavLink className="nav-link" to="/about">
                ABOUT
              </MyNavLink>
              <MyNavLink className="nav-link" to="/register">
                REGISTER
              </MyNavLink>
              <MyNavLink className="nav-link" to="/login" >
                LOGIN
              </MyNavLink>
            </ul>
          </div>

        </NavDiv>
      </nav>
    </div>
  );
};

export default Navbar;
