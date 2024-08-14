import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeProvider'

const RecipeCard = () => {

  const {recipe}=useContext(RecipeContext)

  console.log(recipe)
  return (
    <div>
    {recipe.map((a)=>(
      <div key={a.id}>
        <h1></h1>
      </div>
    ))}


    </div>
  )
}

export default RecipeCard