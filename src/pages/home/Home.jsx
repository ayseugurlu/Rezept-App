import React from 'react'
import RecipeProvider from '../../context/RecipeProvider'
import Header from '../../components/header/Header'
import Form from '../../components/header/Form'
import HomeDiv from './style'
import RecipeCard from './RecipeCard'

const Home = () => {
  return (
    <RecipeProvider>

    <HomeDiv>
      <Header/>
      <Form/>

    </HomeDiv>

    <RecipeCard/>
        
        
    </RecipeProvider>
  )
}

export default Home