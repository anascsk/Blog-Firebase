import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CgPen } from "react-icons/cg";
import {
  Container,
  DeletePost,
  Post,
  PostHeader,
  PostTextContainer,
  Title,
  Button,
  Wrapper,
  AuthorWrapper,
} from "../styles/Home.style";

const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.reload();
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs)
    };

    getPosts();
  }, []);

  return (
    <Container>
      <Wrapper>
        {postLists.map((post) => {
          console.log(postLists);
          return (
            <Post key={post.id}>
              <PostHeader>
                <Title>
                  <h1>{post.title}</h1>
                </Title>
                <DeletePost>
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <Button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      <RiDeleteBin5Line />
                    </Button>
                  )}
                </DeletePost>
              </PostHeader>
              <PostTextContainer>
                <p>{post.postText}</p>
              </PostTextContainer>
              <AuthorWrapper>
                <h3>
                  <span><CgPen /></span> {post.author.name}
                </h3>
              </AuthorWrapper>
            </Post>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Home;
