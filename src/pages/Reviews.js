import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import styles from './styles.module.css';

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      setPostList(
        data.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    getPosts();
  };

  useEffect(() => {
    console.log("Effect called");
    getPosts();
  }, []);
  
  return (
    <div>
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>-- {post.author.name}</h3>
          </div>
        );
      })}
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

export default Home;