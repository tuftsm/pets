import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Review Matthew's Pet Services</h1>
        <div className="inputGp">
          <label> Pet's Name:</label>
          <input
            placeholder="Name..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Share experience..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
                <div className={styles.home}>
                    ~<br/>"Here For All Your Four-Legged Friend's Needs"<br/>~
                </div>  
                <div className={styles.footer}>
                    Utilized with <em><a href="https://github.com/tuftsm/cp03.git" target="_blank">Github Repo</a></em>&emsp;&emsp;&emsp;
                    All non-Matthew images licensed for use with <em>Creative Commons</em> licensing. The creator of this website does not claim to own any non-Matthew images.<br/>
                </div>   
                </div>
  );
}

export default CreatePost;