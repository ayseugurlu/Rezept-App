import styled from "styled-components";


export const DetailsContainer=styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.45)), url("https://cdn.pixabay.com/photo/2016/03/26/22/58/food-1281742_1280.jpg");
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
        align-items: center;
        border-radius: 1rem;
        

    }

    img{
        width: 300px;
        height: 300px;
        /* border: 2px solid yellow; */
        padding:0 2rem;
        border-radius: 7rem;

    }

    h1{
        color: coral;
    }

    p{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        padding: 1rem;
        
        h3{
            font-size: 1.2rem;
        }

    }

    ul{
        
        list-style: circle;
        font-size: large;

    }

`;


