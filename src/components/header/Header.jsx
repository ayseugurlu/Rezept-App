import React from 'react'
import { HeaderDiv, HomeNavLink } from './style'


const Header = () => {
  return (
    <HeaderDiv>
       <h1>Welcome to the Recipe App</h1>
        <p>Discover delicious recipes and create your own culinary masterpieces.</p>
       <button> <HomeNavLink to="/recipes">Go Recipes!</HomeNavLink></button>
    </HeaderDiv>
  )
}

export default Header