import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: rgb(240, 252, 243);
  h1{

  }
 h3{
   font-size: 18px;
   color: gray;
 }
 p{
   border: 1px #cceffab7 solid;
   padding: 10px;
   border-radius: 10px;
  
 }
 
`;
export const Post = styled.div`
  width: 600px;
  height: auto;
  max-height: 600px;
  background-color: rgb(250, 250, 250);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: rgb(209, 248, 219);
  @media only screen and (max-device-width: 600px) {
  width: 90vw;
  
  }
  h1{
    @media only screen and (max-device-width: 600px) {
    font-size: 20px 
    }
  }

`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const Title = styled.div`
  flex: 50%;
`;
export const DeletePost = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Button = styled.div`
  border: none;

  background: none;
  font-size: 30px;
  cursor: pointer;
`;
export const PostTextContainer = styled.div`
  word-wrap: break-word;
  height: auto;
  max-height: 400px;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
`;
