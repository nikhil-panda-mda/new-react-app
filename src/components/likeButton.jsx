export default function({ liked, onClick }) {
  
  return (
    <div>
      <button
        onClick={onClick}
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