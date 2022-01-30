import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container, GoogleButton } from "../styles/Login.style";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
    setIsAuth(true)
    navigate('/')
    });
  };
  return <Container>
     <p>Sign In With Google</p>
     <GoogleButton onClick={signInWithGoogle}>Sign In With Google</GoogleButton>

  </Container>;
};

export default Login;
