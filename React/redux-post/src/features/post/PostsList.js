import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPost,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postSlice";
import PostView from "./PostView";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPost);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeed") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostView post={post} key={post.id} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }
  return (
    <div>
      <h1>Posts</h1>
      {content}
    </div>
  );
};

export default PostsList;
