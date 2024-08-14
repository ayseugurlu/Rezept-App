import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.div`
background-color: seagreen;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 0.5rem;
    box-sizing: border-box;
    
    
    
`;

export const MyNavLink=styled(NavLink)`

    text-decoration:none;
    color:${({logo})=> logo ? "black" : "orange"};
    padding:1rem ;
    font-size:1.2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    &:hover{
        color:white;
        transform: scale(1.10);
    }
    `;

export const LogoDiv=styled.div`
    font-size:2rem;
    border: ${({logo})=> logo? "1px solid white": "none"};
    border-radius: 60%;
    box-shadow: 2px 2px  20px inset white ;
    padding: 0 1rem ;
    padding-top: 1rem;
    
`;

export default NavDiv;
