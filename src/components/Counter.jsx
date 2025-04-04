// src/components/LikeButton.jsx
import { useState } from "react";

function Counter() {
  const [text, setText] = useState("");

  return (
    <div class="w-full text-center">
      <p class="mb-2">You typed: {text}</p>
      <input 
        type="text" 
        placeholder="type here..X>" 
        value={text} 
        onChange={(e) => {setText(e.target.value)}}
        style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />
    </div>
  );
}

export default Counter;