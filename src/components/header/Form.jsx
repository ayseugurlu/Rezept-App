import React from 'react'
import FormDiv, { FormArea } from './style'

const Form = () => {

  const handleSubmit=()=>{
    
  }
  return (
    <div>
      <FormDiv>
            <FormArea onSubmit={handleSubmit}>
                <input type="text" placeholder='Search for a Recipe' onChange={(e)=>e.target.value}/>
                
                <select name="mealType" id="mealType">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="brunch">Brunch</option>
                    <option value="teatime">Teatime</option>
                    
                </select>
                <button>SEARCH</button>
            </FormArea>
        </FormDiv>
    </div>
  )
}

export default Form