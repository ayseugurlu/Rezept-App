import styled from "styled-components";


export const DetailsContainer=styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.65)), url("https://cdn.pixabay.com/photo/2016/06/29/06/14/thai-ingredient-1486055_1280.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    padding: 2rem 0;

    div{
        background-color: rgba(0, 0,0, 0.1);
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        

    }

    img{
        width: 300px;
        height: 300px;
        /* border: 2px solid yellow; */
        /* padding:0 3rem; */
        border-radius: 2rem;
        border: 1px solid white;
        margin: auto;


    }


    h1{
        color: coral;
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    p{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        padding: 1rem;
        
        h3{
            font-size: 1.2rem;
            color: coral;
        }

    }

    ul{
        
        
        list-style: square;
        font-size: large;
        color: aliceblue;
        

    }

`;

export const SpanDiv=styled.div`
    text-align: center;
    margin: 1rem;
   
    button{
        
        margin: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
        background-color: #DAB520;
        color: white;
        font-family: monospace;
    }
`;


