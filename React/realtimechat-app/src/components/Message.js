import React, { useRef, useEffect } from "react";
import Moment from "react-moment";

const Message = ({ msg, user1 }) => {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  return (
    <div
      className={`message-wrapper ${msg.from === user1 ? "own" : ""}`}
      ref={scrollRef}
    >
      <p
        className={
          msg.from === user1
            ? "bg-primary own text-light"
            : "friend bg-dark text-light"
        }
      >
        {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
        {msg.text}
        <br />
        <small>
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
      </p>
    </div>
  );
};

export default Message;
