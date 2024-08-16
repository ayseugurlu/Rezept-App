import styled from "styled-components";

const AboutDiv = styled.div`
  background: url("https://cdn.pixabay.com/photo/2021/10/30/12/50/woman-6754248_1280.jpg");
  background-position: center;
  background-size: cover;
  height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const InfoDiv = styled.div`
  text-align: center;
  border: 1px solid white;
  width: 800px;
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-family: monospace;
  border-radius: 2rem;

  @media (max-width: 768px) {
    width: 500px;
    padding: 1rem;
  }
`;

export default AboutDiv;
