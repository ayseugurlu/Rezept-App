import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"



export const RecipeContext = createContext()

const RecipeProvider = ({children}) => {

    const [recipe,setRecipe]=useState([])
    const [error, setError]=useState(false)
    const [loading, setLoading]=useState(true)
    const [search, setSearch]=useState('')
    const [category, setCategory]=useState('')

    const API_ID="1d48cbd9";
    const API_KEY="8808cb4be21ee03b04baabe10ec9a1b7"

    const getData =async ()=>{
        try {
            const {data} = await axios(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${category}`);

            setRecipe(data)
            setLoading(false)
            
        } catch (error) {
            setError(true)
            
        }
    }

    useEffect(()=>{
        getData();
    },[])

    console.log(recipe);
  return (
    <RecipeContext.Provider value={{recipe, search, setSearch}}>
    {children}

    </RecipeContext.Provider>
  )
}

export default RecipeProvider