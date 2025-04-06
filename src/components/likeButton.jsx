// src/components/LikeButton.jsx
import { useState } from "react";

export default function() {
  const [liked, setLiked] = useState(false);

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