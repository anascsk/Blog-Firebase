import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { Container, CreatePostWrap, InputWrap, Button } from '../styles/CreatePost.style'

const CreatePost = ({ isAuth }) => {
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
  return <Container>
      <CreatePostWrap>
          <h1>Create a Post</h1>
          <InputWrap>
                <label>Title:</label>
                <input 
                placeholder="Title..."
                onChange={(event) => {
                    setTitle(event.target.value)
                }} 
                />
          </InputWrap>
          <InputWrap>
              <label>Post:</label>
              <textarea
              placeholder="Open yourself here..."
              onChange={(event) => {
                  setPostText(event.target.value)
              }} />

          </InputWrap>
          <Button onClick={createPost}>Submit Post</Button>
      </CreatePostWrap>

  </Container>;
};

export default CreatePost;
