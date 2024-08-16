import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FormDiv = styled.div`
  
  border: 3px solid seagreen;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgba(0,0,0,0.8);
  /* margin:0 5rem; */
  /* max-width: 200rem; */
  /* width: 30rem; */
  /* min-width: 496px; */

  @media (max-width: 768px){
    width: 90%; 
    padding: 1rem;
    box-sizing: border-box;
        
       
    }
  

`;

export const FormArea = styled.form`
    display: flex;
    justify-content: space-around;
    gap: 1rem;

    @media (max-width:768px){
        flex-direction: column; 
        align-items: center; 
        gap: 0.5rem; 
        
    }
    

    input{
        width: 300px;
        height: 30px;
        border-radius: 1rem;
        border: none;
        padding: 10px;
        text-indent: 8px;

        @media (max-width:768px){
          width: 80%;
          padding: 0.5rem;
          text-indent: 3px;
          font-size: 0.8rem;
        }
    }

    button{
        background-color: seagreen;
        border-radius: 1rem;
        border: none;
        width: 10rem;
        color: white;
        font-size: 0.8rem;

        @media (max-width:768px){
            width: 50%;
            padding: 0.5rem;
            
        }
    }

    select{
        width: 10rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color: orange;
        color: white;
        text-transform: uppercase;

        @media (max-width:768px){
            width: 80%;
            font-size: 0.8rem;
            padding: 0.5rem;
            text-align: center;
        }

        
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

        @media (max-width: 768px) {
      font-size: 2rem; 
    }

    }

    p{
        font-size: 1.2rem;

        @media (max-width: 768px) {
            font-size: 1rem;
        }

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

    @media (max-width: 768px) {
      width: 80%; 
      font-size: 1rem; 
    }
    
    }
`;

export const HomeNavLink=styled(NavLink)`
    color: white;
    text-decoration: none;


  @media (max-width: 768px) {
    font-size: 1rem; 
  }


`;

export default FormDiv;
