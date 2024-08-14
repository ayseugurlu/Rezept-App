import React from 'react'
import LoginDiv, { FormLogin } from './style'
import logo from "../../assets/logo.webp"

const Login = () => {
  return (
    <LoginDiv>
        <div>
            <img src={logo} alt="" width="100px" />
            <h2>MealMuse</h2>
            <FormLogin>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>Login</button>
            </FormLogin>
        </div>
    </LoginDiv>
  )
}

export default Login