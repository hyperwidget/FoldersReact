import { useEffect, useState } from "react";
import { Form, Post } from "../../components";

import { findAll } from "../../services/post";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      setPosts(await findAll());
    };

    getPosts();
  }, [setPosts]);

  const refresh = async () => {
    setPosts(await findAll());
  };

  return (
    <>
      <section>
        <h3>Add a new post</h3>
        <Form onSuccess={refresh} />
      </section>

      <section className="posts-container">
        {posts.map((post, index) => (
          <Post key={post.id} post={post} index={index} />
        ))}
      </section>
    </>
  );
};
