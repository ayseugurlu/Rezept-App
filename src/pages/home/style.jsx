import styled from 'styled-components';


export const HomeDiv = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2015/06/01/23/43/pasta-794464_1280.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;

  @media (max-width:768px){
    background-size: cover;
    height: 60vh;
        
    }
  
  
  
`;

export const RecipeContainer= styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.50)), url("https://cdn.pixabay.com/photo/2017/04/27/08/18/champagne-2264811_1280.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover; 
    object-fit: center;
    padding: 3rem;
    min-height: 80vh;

    @media (max-width: 768px) {
    padding: 1.5rem;
    background-attachment: scroll;
  }
    
   
`;

export const RecipeCardContainer = styled.div`
    /* background: url("https://cdn.pixabay.com/photo/2017/04/27/08/18/champagne-2264811_1280.jpg"); */
    /* background-size: cover; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1rem;
    /* width: 100vw; */
    margin-top: 2rem;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

    
   
`;


export const Cards = styled.div`
    width: 400px;
    height:  500px;
    background-color: rgba(0,80,0,0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    

    img{
        width: 300px;
        height: 300px;
        border-radius: 2rem;
        border: 2px solid orange;

    @media (max-width: 768px) {
      /* width: 80%; */
      /* height: auto; */
    }
    }

    h1{
        color: antiquewhite;
        text-align: center;

        @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    }

    button{
        width: 5rem;
        padding: 0.7rem;
        background-color: orange;
        border: none;
        border-radius: 1rem;
        color: white;
        text-transform: uppercase;
        font-weight: 700;

        &:hover{
          background-color: white;
          color: orange;
        }

        @media (max-width: 768px) {
             width: 4rem;
             padding: 0.5rem;
        }
        
    }

    &:hover{
        transform: scale(1.01);
        box-shadow: 0px 2px  10px white;
    }


    @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin-bottom: 1.5rem;
  }
`;

