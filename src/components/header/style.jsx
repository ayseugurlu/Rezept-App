import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FormDiv = styled.div`
  
  border: 3px solid seagreen;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgba(0,0,0,0.8);
  margin:0 5rem;
  /* max-width: 200rem; */
  /* width: 30rem; */
  min-width: 496px;
  

`;

export const FormArea = styled.form`
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    

    input{
        width: 300px;
        height: 30px;
        border-radius: 1rem;
        border: none;
        padding: 10px 1.5rem;
    }

    button{
        background-color: seagreen;
        border-radius: 1rem;
        border: none;
        width: 10rem;
        color: white;
    }

    select{
        width: 10rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color: orange;
        color: white;
        text-transform: uppercase;

        
    }

`
export const HeaderDiv=styled.div`
    text-align: center;
    padding-top: 1rem;
    color: darkorange;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: rgba(0,0,0,0.7);
    padding: 3rem;
    border-radius: 3rem;
   

    h1{
        font-size: 3rem;
        color: white;

    }

    p{
        font-size: 1.2rem;
    }

    button{
        background-color: orange;
        padding: 1rem;
        border: none;
        border-radius: 1rem;
        font-size: 1.2rem;
        color: white;
        opacity: 0.5;
        
        &:hover{
            opacity: 1;
        
    }
    
    }
`;

export const HomeNavLink=styled(NavLink)`
    color: white;
    text-decoration: none;


`;

export default FormDiv;
