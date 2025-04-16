import { useEffect, useRef } from "react";

export default function App() {
  const interactiveRef = useRef(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 15;
      curY += (tgY - curY) / 15;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    const handleMouseMove = (e) => {
      tgX = e.clientX;
      tgY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className='gradient-bg static'>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" ref={interactiveRef}></div>
        </div>
      </div>

      <div class="absolute isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5"></div>
    </div>
  );
}

// import Header from './components/Header'
// import Content from './components/Content';
// import Footer from './components/Footer';
// import Moods from './components/Moods';
// import Effects from './components/Effects';
// import posts from './utils/posts';
// import Tasks from './components/Tasks';
// import NewTask from './components/NewTask';
// import { useState } from 'react';
// import taskList from "./utils/tasks";

// const [tasks, setTasks] = useState(taskList);

// const onClick = (id) => {
//   setTasks(prev => {
//     return prev.map(task =>
//       task.id == id ? { ...task, isFinished: !task.isFinished } : task
//     )
//   })
// };

// const onAddTask = (taskTitle) => {
//   const newTask = {
//     id: crypto.randomUUID(),
//     title: taskTitle,
//     isFinished: 0
//   }
//   setTasks(prev => [...prev, newTask]);
// }
// <Header />
//       <div className='pt-20 px-3 pb-3 flex-1'>
//         {/* <Counter /> */}
//         <div className="mb-10">
//           {/* <Content posts={posts}/> */}
//           {/* <Effects/> */}
//           {/* <Moods/> */}
//           <div className='p-3'>
//             <NewTask addTask={(title) => onAddTask(title)}/>
//           </div>
//           <div className='grid grid-cols-3 gap-3'>
//             {
//               tasks.map(task =>
//                 <Tasks key={task.id} task={task} finished={task.isFinished} click={() => onClick(task.id)} />
//               )}
//           </div>
//         </div>
//       </div>
//       <Footer />