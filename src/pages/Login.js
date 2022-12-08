import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="lp">
    <div className="loginPage">
      <p>Sign In With Google to View Schedule and Reviews</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
                <div className={styles.home}>
                    ~<br/>"Here For All Your Four-Legged Friend's Needs"<br/>~
                </div>  
                <div className={styles.footer}>
                    Utilized with <em><a href="https://github.com/tuftsm/pets.git" target="_blank">Github Repo</a></em>&emsp;&emsp;&emsp;
                    All non-Matthew images licensed for use with <em>Creative Commons</em> licensing. The creator of this website does not claim to own any non-Matthew images.<br/>
                </div>   
              </div>
  );
}

export default Login;