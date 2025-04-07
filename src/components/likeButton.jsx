// src/components/LikeButton.jsx
import { useState } from "react";

export default function({ like }) {
  const [liked, setLiked] = useState(like);

  return (
    <div>
      <button
        onClick={() => setLiked(!liked)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer"
        }}
      >
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}