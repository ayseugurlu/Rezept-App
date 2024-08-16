import React, { createContext, useState } from "react";
import axios from "axios";


export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  //^ login icin gerekli usestateler
  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const API_ID = "1d48cbd9";
  const API_KEY = "8808cb4be21ee03b04baabe10ec9a1b7";

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${mealType}`
      );

      setRecipe(data.hits);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <img src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif" alt="" />
    );
  }

  if (loading) {
    return (
      <img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" alt="" />
    );
  }

  return (
    <RecipeContext.Provider
      value={{
        name,
        password,
        setName,
        setPassword,
        setQuery,
        setMealType,
        recipe,
        getData,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
