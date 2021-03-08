import React from "react";

const Post = ({ id, title, body, author, onDelete }) => {
  const handleDelete = () => onDelete(id);
  return (
    <div className="postView">
      <h2>{title}</h2>
      <p>{body}</p>
      <p>Posted by: {author}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Post;
