import { Link } from "react-router-dom";
import { archive, unarchive } from "../../services/post";

export const Post = ({ post, index = 0, isPostView = false, onRefresh }) => {
  if (!post.id) {
    return null;
  }

  return (
    <article className={`post ${index % 2 === 0 ? "" : " odd"}`}>
      <div className="post-title">
        <img src={post.avatar} alt="avatar" />
        <div>
          <p>
            <strong>{post.name}</strong>
            <i
              class="fui-cross"
              title={post.archived ? "unarchive" : "archive"}
              data-post-id={post.id}
              data-archived={post.archived}
              onClick={async () => {
                (await post.archived)
                  ? await unarchive(post.id)
                  : await archive(post.id);
                onRefresh();
              }}
            ></i>
          </p>
          <p className="post-meta">{post.createdAt}</p>
        </div>
      </div>
      <p className="post-content"> {post.content}</p>
      {!isPostView && (
        <Link to={`/post/${post.id}`}>
          {post.Comments.length > 0 ? "Read More" : "Be the first to comment"}
        </Link>
      )}
    </article>
  );
};
