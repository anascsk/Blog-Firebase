import React, {useEffect, useState} from 'react';
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore'
import {auth, db} from '../firebase-config'
import { Container, DeletePost, Post, PostHeader, PostTextContainer, Title, Button } from '../styles/Home';

const Home = ({isAuth}) => {
    const [postLists, setPostList] = useState([])
    const postsCollectionRef = collection (db, "posts")

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id)
        await deleteDoc(postDoc);
    }

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        }

        getPosts()

    }, [deletePost])

    
  return <Container>
      {postLists.map((post) => {
          
          return (
              <Post key={post.id}>
                  <PostHeader>
                      <Title>
                          <h1 >{post.title}</h1>

                      </Title>
                      <DeletePost>
                          {isAuth && post.author.id === auth.currentUser.uid && (
                              <Button onClick={() => {
                                  deletePost(post.id)
                              }}>X</Button>
                          )}
                      </DeletePost>
                      </PostHeader>
                      <PostTextContainer>
                          <p>{post.postText}</p>
                      </PostTextContainer>
                      <h3>@{post.author.name}</h3>
                  
              </Post>
          )
      })}
  </Container>;
};

export default Home;
