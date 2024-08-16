import Form from '../../components/header/Form'
import { RecipeContainer } from './style'
import RecipeCard from './RecipeCard'

const Recipe = () => {
    
  return (
    <RecipeContainer>
        <Form />    
        <RecipeCard/> 
    </RecipeContainer>
  )
}

export default Recipe