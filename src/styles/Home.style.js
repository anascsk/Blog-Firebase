import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: rgb(206, 235, 233);
  h1 {
  }
  h3 {
    font-size: 18px;
    color: gray;
  }
  p {
    border: 1px #cceffab7 solid;
    padding: 10px;
    border-radius: 10px;
  }
`;
export const LandingImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  min-width: 50vw;
  border-radius: 15px;
  background-color: aliceblue;
  background-image: url(https://cutewallpaper.org/21/wallpapers-blog/Want-to-Blog-About-Wallpapers-You-Sell-Here-Are-Some-Tips-.jpg);
  background-repeat: no-repeat;
  @media (max-width: 900px) {
    width: 80vw;
  }
  @media (max-width: 500px) {
display:none  }
`;
export const Image = styled.img`
  display: flex;
  margin: auto;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-content: center;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Post = styled.div`
  position: relative;
  width: 97%;
  height: auto;
  max-height: 600px;
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
  h1 {
    color: #356e54e0;

    @media only screen and (max-device-width: 600px) {
      font-size: 20px;
    }
  }
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const Title = styled.div`
  flex: 90%;
`;
export const DeletePost = styled.div`
  flex: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #c90a0a9e;
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
export const AuthorWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  width: 90%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  span {
    color: maroon;
    font-size: 1.5rem;
  }
`;
