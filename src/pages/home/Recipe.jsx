import React, { useContext } from 'react'
import Form from '../../components/header/Form'
import { RecipeContainer } from './style'
import { RecipeContext } from '../../context/RecipeProvider'
import RecipeCard from './RecipeCard'

const Recipe = () => {
    const {recipe}=useContext(RecipeContext)
  return (
    <RecipeContainer>
        <Form />    
        <RecipeCard/> 
    </RecipeContainer>
  )
}

export default Recipe