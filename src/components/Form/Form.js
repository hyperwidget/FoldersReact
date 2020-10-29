import { create as createPost } from "../../services/post";
import { create as createComment } from "../../services/comment";
import { useEffect } from "react";

export const Form = ({ type = "post", postId = null, onSuccess }) => {
  useEffect(() => {
    if (window.localStorage.getItem("name")) {
      document.getElementsByName("name")[0].value = window.localStorage.getItem(
        "name"
      );
    }
    if (window.localStorage.getItem("avatar")) {
      document.getElementsByName(
        "avatar"
      )[0].value = window.localStorage.getItem("avatar");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitCall = type === "post" ? createPost : createComment;

    const body = {
      name: e.target[0].value,
      avatar: e.target[1].value,
      content: e.target[2].value,
    };

    if (type !== "post") {
      body.post_id = postId;
    }

    await submitCall(JSON.stringify(body));
    onSuccess();
    e.target.reset();

    if (body.name.length > 0) {
      window.localStorage.setItem("name", body.name);
    }
    if (body.avatar.length > 0) {
      window.localStorage.setItem("avatar", body.avatar);
    }
  };

  return (
    <form id="post-form" className="new-post" onSubmit={handleSubmit}>
      <div className="details-wrapper">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />
        </div>
        <div>
          <label for="avatar">Avatar</label>
          <input
            type="text"
            id="avatar"
            name="avatar"
            placeholder="Enter a url for an image"
          />
        </div>
      </div>

      <textarea
        id="content"
        name="content"
        placeholder="Share something"
        styles={{ height: "200px" }}
      ></textarea>

      <input type="submit" value="Submit" />
    </form>
  );
};
