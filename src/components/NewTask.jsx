import { useState } from "react";
export default function ({addTask}) {
  const [taskN, setTask] = useState('');
  function addNewTask() {
    const trimmed = taskN.trim();
    if (trimmed.length === 0) return; // nope, you're not sneaking past
    addTask(trimmed);
    setTask('');
  }

  return (
    <>
      <div className="flex gap-x-3">
        <input type="text" value={taskN} placeholder="Enter a new Task.." className="p-2 w-64 outline outline-white rounded-md" onChange={(e) => setTask(e.target.value)}/>
        <button className="" onClick={addNewTask} disabled={taskN.trim() === ''}>Add Task</button>
      </div>
    </>
  )
}