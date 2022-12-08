import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router basename="/firebase/build/">
      <nav>
        <Link to="/"> Matthew's Pet Services </Link>
        <Link to="/About"> About </Link>
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/Schedule"> Schedule </Link>
            <Link to="/CreatePost"> Create Review </Link>
            <Link to="/Reviews"> Reviews </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Reviews" element={<Reviews isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/Schedule" element={<Schedule setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;