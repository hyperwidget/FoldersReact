import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Post, Comment, Form } from "../../components";
import { findOne } from "../../services/post";

export const PostPage = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getPost = async () => {
      setPost(await findOne(id));
    };

    getPost();
  }, [setPost, id]);

  const refresh = async () => {
    setPost(await findOne(id));
  };

  if (!post.id) {
    return null;
  }

  return (
    <>
      <Post post={post} isPostView />

      {post.Comments &&
        post.Comments.map((comment, index) => (
          <Comment comment={comment} index={index} />
        ))}

      <h3>Add a Comment</h3>

      <Form type="comment" onSuccess={refresh} postId={post.id} />
    </>
  );
};
