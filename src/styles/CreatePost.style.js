import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: grid;
  place-items: center;

`;
export const CreatePostWrap = styled.div`
  width: 500px;
  height: auto;
  padding: 20px;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  background-color: rgb(95, 99, 96); 
  @media only screen and (max-device-width: 600px) {
  width: 90vw;
  
  }
  h1 {
    text-align: center;
  }
  label {
    font-size: 25px;
  }
`;
export const InputWrap = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  input {
    height: 40px;
    font-size: 18px;
    border: none;
    border-radius: 2px;
    padding: 5px;
    margin-top: 5px;
  }
  textarea {
    height: 150px;
    font-size: 18px;
    border: none;
    border-radius: 2px;
    padding: 5px;
    margin-top: 5px;
  }
`;
export const Button = styled.div`
 margin-top: 20px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  background-color: silver;
  display: flex;
  justify-content: center;
align-items: center;
  color: black;
`;
