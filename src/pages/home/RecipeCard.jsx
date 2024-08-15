import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeProvider'
import { Cards, RecipeCardContainer, RecipeContainer } from './style'
import Details from '../details/Details'
import { useNavigate } from 'react-router-dom'

const RecipeCard = () => {

  
  const {recipe}=useContext(RecipeContext)

  const navigate=useNavigate()

  console.log(recipe)
  return (
    <RecipeCardContainer>
    {recipe.map(({recipe})=>(
      <Cards>
      <img src={recipe.image} alt="" />
        <h1>{recipe.label}</h1>
        <button onClick={(e)=>navigate("/details")}>Details</button>
      </Cards>
    ))}


    </RecipeCardContainer>
  )
}

export default RecipeCard