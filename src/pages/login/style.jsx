import styled from 'styled-components';

const LoginDiv = styled.div`
    background: url("https://cdn.pixabay.com/photo/2015/09/09/17/38/basil-932079_1280.jpg");
  background-position: center;
  background-size: cover;
  height: 100vh;
  background-color: red;
  padding: 2rem;
  color: black;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  
  div{
    border: 1px solid white;
    padding: 2rem;
    border-radius: 30%;
    background-color: rgba(255,255,255,0.2);
  }
  
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        padding: 1rem;
        opacity: 0.8;

        &:hover{
          opacity: 1;
          cursor: pointer;
          background-color: green;
        }
        
    }

    

`

export default LoginDiv;
