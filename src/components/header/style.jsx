import styled from 'styled-components';

const FormDiv = styled.div`
  background-color: aliceblue;
  border: 3px solid seagreen;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;

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
`;

export default FormDiv;
