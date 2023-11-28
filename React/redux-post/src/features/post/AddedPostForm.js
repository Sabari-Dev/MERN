import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../user/usersSlice";

const AddedPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);
  const handleUserId = (e) => setUserId(e.target.value);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const onSave = () => {
    if (content && title) {
      dispatch(postAdded(title, content, userId));
      setContent("");
      setTitle("");
    }
  };
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section>
      <h1>Add new post</h1>
      <form action="">
        <p>
          <label htmlFor="author">Author : </label>
          <select name="author" id="author" onChange={handleUserId}>
            <option value="">Select Author</option>
            {userOptions}
          </select>
        </p>
        <p>
          <label htmlFor="postTitle">Post Title :</label>
          <br />
          <input
            type="text"
            id="postTitle"
            onChange={handleTitle}
            name="postTitle"
            value={title}
          />
        </p>
        <p>
          <label htmlFor="postContent">Post Content :</label>
          <br />
          <input
            type="text"
            id="postContent"
            onChange={handleContent}
            name="postContent"
            value={content}
          />
        </p>
        <br />
        <button onClick={onSave} type="button" disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddedPostForm;
