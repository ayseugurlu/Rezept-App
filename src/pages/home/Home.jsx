import React from 'react'
import Header from '../../components/header/Header'
import {HomeDiv} from './style'
import RecipeCard from './RecipeCard'

const Home = () => {
  return (
    <div>

    <HomeDiv>
      <Header/>
    </HomeDiv>

    <RecipeCard/>
        
        
    </div>
  )
}

export default Home