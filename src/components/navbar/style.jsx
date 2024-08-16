import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.div`
background-color: seagreen;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 0.5rem;
    box-sizing: border-box;
    height: 20vh;
    
    
    
    
    
    
`;

export const MyNavLink=styled(NavLink)`

    text-decoration:none;
    color:${({logo})=> logo ? "black" : "orange"};
    padding:1rem ;
    font-size:1.2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    transition: all 0.3s ease;

    &:hover{
        color:white;
        transform: scale(1.10);
    }
    `;

export const LogoDiv=styled.div`
    
    padding-top: 1rem;

    &:hover{
        transform: scale(1.01);
    }
    
`;

export const Menu=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 768px){
        flex-direction: column;
        width: 100%;
        display: ${({osman})=> osman===false ? "flex" : "none"};
        position: absolute;
        top: 20vh;
        background-color: seagreen;
        z-index: 10;
    }

`;

export const Hamburger =styled.div`
        font-size: 2rem;
        color: orange;
        display:none;
        cursor: pointer;

        &:hover{
            color: white;
            transform: scale(1.1);
        }

        @media (max-width: 768px){
            display: flex;
            padding: 1rem;

        }
`;

export default NavDiv;
