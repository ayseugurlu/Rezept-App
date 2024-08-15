import React, { useContext } from 'react'
import LoginDiv, { FormLogin } from './style'
import logo from "../../assets/logo.webp"
import { RecipeContext } from '../../context/RecipeProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {name,setName,password, setPassword}=useContext(RecipeContext)

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

    localStorage.setItem("username",name)
    localStorage.setItem("password",password)

    navigate("/recipes")

  }

  return (
    <LoginDiv>
        <div>
            <img src={logo} alt="" width="100px" />
            <h2>MealMuse</h2>
            <FormLogin onSubmit={handleSubmit}>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Username'/>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/>
                <button type='submit'>Login</button>
            </FormLogin>
        </div>
    </LoginDiv>
  )
}

export default Login