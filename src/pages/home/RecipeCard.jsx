import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeProvider'
import { Cards, RecipeCardContainer} from './style'
import {useNavigate } from 'react-router-dom'



const RecipeCard = () => {

  
  const {recipe}=useContext(RecipeContext)

  const navigate=useNavigate()

 
  return (
    <RecipeCardContainer>
    {recipe.map(({recipe})=>(
      <Cards>
      <img src={recipe.image} alt="" />
        <h1>{recipe.label}</h1>
        <button onClick={(e)=>navigate("/details", {state:{recipe}})}>Details</button>
      </Cards>
    ))}


    </RecipeCardContainer>
  )
}

export default RecipeCard