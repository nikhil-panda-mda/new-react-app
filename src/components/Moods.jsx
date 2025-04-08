import { useState } from "react";

export default function MoodSwitcher() {

  const [isHappy, setIsHappy] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const moodMoji = isHappy ? '😁' : '😭';

  return (
    <>
      <div className="w-full">
        <div className="w-90 mx-auto p-4 bg-red-200 rounded-lg flex flex-col justify-center">
          <div className="mx-auto flex flex-col gap-y-2">
            <button onClick={() => { setIsHidden(prev => !prev) }}>
              {isHidden ? 'Hide Mood' : 'Show Mood'}
            </button>
            <button onClick={() => {setIsHappy(prev => !prev)}}>
              {isHappy? 'Turn Sad' : 'Turn Happy'}
            </button>
            <div className="mx-auto">
            {isHidden && <div style={{ fontSize: "4rem", marginTop: "1rem" }}>{moodMoji}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
// const [isVisible, setIsVisible] = useState(true);
// const [isHappy, setIsHappy] = useState(true);
// const [isOn, setIsOn] = useState(false);


// const toggleVisibility = () => setIsVisible(prev => !prev);
// const toggleMood = () => setIsHappy(prev => !prev);
// const toggle = () => setIsOn(prev => !prev);

// const moodEmoji = isHappy ? "😄" : "😢";
// const bgColor = isHappy ? "#d1fae5" : "#fee2e2"; // Tailwind green-100 or red-100 vibes

// return (
//   <div
//     style={{
//       padding: "1.5rem",
//       borderRadius: "1rem",
//       backgroundColor: bgColor,
//       textAlign: "center",
//       width: "250px",
//       margin: "2rem auto",
//       boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
//     }}
//   >
//     <h2 style={{color: 'black'}}>Mood Switcher 🔁</h2>

//     <button onClick={toggleVisibility} style={{ margin: "0.5rem" }}>
//       {isVisible ? "Hide Mood" : "Show Mood"}
//     </button>

//     <div
//       onClick={toggle}
//       className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ${
//         isOn ? "bg-green-500" : "bg-gray-400"
//       }`}
//     >
//       <div
//         className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
//           isOn ? "translate-x-6" : "translate-x-0"
//         }`}
//       />
//     </div>
//     <button onClick={toggleMood} style={{ margin: "0.5rem" }}>
//       {isHappy ? "I'm sad 😢" : "I'm happy 😄"}
//     </button>

//     {isVisible && (
//       <div style={{ fontSize: "4rem", marginTop: "1rem" }}>{moodEmoji}</div>
//     )}
//   </div>
// );
