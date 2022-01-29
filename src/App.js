import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link,Routes,Route } from "react-router-dom";
import {useState} from 'react'
import {auth} from './firebase-config'
import {signOut} from 'firebase/auth'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import Header from "./components/Header";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login";
    })
  }
  return (
    <Router >
      <Header isAuth={isAuth} signUserOut={signUserOut}/>
     {/* <nav>
       <Link to="/">Home</Link>
       {!isAuth ? (<Link to="/login">Login</Link>)  : (
         <>
         <Link to="/createpost">Create Post</Link>
         <button onClick={signUserOut}>Logout</button>
         </>
       )}
     </nav> */}
     <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/createpost" element= {
          <CreatePost isAuth={isAuth} />} />
        
        <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
     </Routes>
    </Router>
  );
}

export default App;
