import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const ReactionButtons = ({ post }) => {
  const reactionEmojis = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕️",
  };
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmojis).map(
    ([name, emoji]) => {
      return (
        <button
          type="button"
          className="reactionBtn"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  );
  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
