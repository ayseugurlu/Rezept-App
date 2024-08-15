import React, { useContext } from 'react'
import FormDiv, { FormArea } from './style'
import { RecipeContext } from '../../context/RecipeProvider'

const Form = () => {

  const {setQuery,setMealType,getData}=useContext(RecipeContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    getData()

  }
  return (
    <div>
      <FormDiv>
            <FormArea onSubmit={handleSubmit}>
                <input type="text"  placeholder='Search for a Recipe' onChange={(e)=>setQuery(e.target.value)}/>
                
                <select name="mealType" id="mealType" onChange={(e)=>setMealType(e.target.value)}>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="brunch">Brunch</option>
                    <option value="teatime">Teatime</option>
                    
                </select>
                <button type='submit'>SEARCH</button>
            </FormArea>
        </FormDiv>
    </div>
  )
}

export default Form