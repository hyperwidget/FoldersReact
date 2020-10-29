import { useEffect, useState } from "react";
import { Post } from "../../components";
import { findArchived } from "../../services/post";

export const Archives = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      setPosts(await findArchived());
    };

    getPosts();
  }, [setPosts]);
  return (
    <>
      <section className="posts-container">
        {posts.map((post, index) => (
          <Post key={post.id} post={post} index={index} />
        ))}
      </section>
    </>
  );
};
