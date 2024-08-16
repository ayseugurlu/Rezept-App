import React from 'react'
import { DetailsContainer, SpanDiv } from './style'
import { useLocation } from 'react-router-dom'
import { AiOutlineFire } from "react-icons/ai";

const Details = () => {

  const {state:{recipe}}=useLocation()

  console.log(recipe);
  return (
    <DetailsContainer>
    <div>
        <h1>{recipe.label}🍴📜</h1>

        <img src={recipe.image} alt="" />

        <SpanDiv>
          <span>{recipe.dietLabels.map((a,b)=> <button style={{backgroundColor: a.includes("High") ? "green" : a.includes("Low") ? "red" : "yellow"}} key={b}>{a}</button>)} <button><AiOutlineFire /> {(recipe.calories).toFixed(2)}</button></span>
        </SpanDiv>
        
        <p>
        <h3>Ingredients</h3>
            {recipe.ingredients.map((item)=>(
              <ul>
                <li> {item.text}</li>
              </ul>
             ))}
        </p>
        <p>
        <h3>Nutrients</h3>
        <ul>
        
          <li>{recipe.totalNutrients.CA.label}: {(recipe.totalNutrients.CA.quantity).toFixed(2)} {recipe.totalNutrients.CA.unit}</li>

          <li>{recipe.totalNutrients.FAT.label}: {(recipe.totalNutrients.FAT.quantity).toFixed(2)} {recipe.totalNutrients.FAT.unit}</li>

          <li>{recipe.totalNutrients.FE.label}: {(recipe.totalNutrients.FE.quantity).toFixed(2)} {recipe.totalNutrients.FE.unit}</li>

          <li>{recipe.totalNutrients.MG.label}: {(recipe.totalNutrients.MG.quantity).toFixed(2)} {recipe.totalNutrients.MG.unit}</li>

          <li>{recipe.totalNutrients.NA.label}: {(recipe.totalNutrients.NA.quantity).toFixed(2)} {recipe.totalNutrients.NA.unit}</li>

          <li>{recipe.totalNutrients.K.label}: {(recipe.totalNutrients.K.quantity).toFixed(2)} {recipe.totalNutrients.K.unit}</li>
        </ul>
        </p>

</div>
    </DetailsContainer>
  )
}

export default Details