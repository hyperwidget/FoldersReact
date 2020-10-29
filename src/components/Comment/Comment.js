export const Comment = ({ comment, index }) => {
  return (
    <article className={`post comment${index % 2 === 0 ? " odd" : ""}`}>
      <div className="post-title">
        <img src={comment.avatar} alt="avatar" />
        <div>
          <p>
            <strong>{comment.name}</strong>
          </p>
          <p className="post-meta">{comment.createdAt}</p>
        </div>
      </div>

      <p className="post-content">{comment.content}</p>
    </article>
  );
};
