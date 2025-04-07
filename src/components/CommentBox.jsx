import { useState } from "react";

export default function ({ post, addComment }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() !== "") {
      addComment({message: input.trim()})
      setInput('');
    }
  };

  return (
    <div key="comment-input-box" className='flex w-full gap-2 p-2 mx-auto'>
      <input
        value={input}
        className='w-65'
        type="text"
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}