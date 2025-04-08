import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';
import Moods from './components/Moods';
import Effects from './components/Effects';
import posts from './utils/posts';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import { useState } from 'react';
import taskList from "./utils/tasks";

function App() {

  const [tasks, setTasks] = useState(taskList);

  const onClick = (id) => {
    setTasks(prev => {
      return prev.map(task =>
        task.id == id ? { ...task, isFinished: !task.isFinished } : task
      )
    })
  };

  const onAddTask = (taskTitle) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isFinished: 0
    }
    setTasks(prev => [...prev, newTask]);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className='pt-20 px-3 pb-3 flex-1'>
        {/* <Counter /> */}
        <div className="mb-10">
          {/* <Content posts={posts}/> */}
          {/* <Effects/> */}
          {/* <Moods/> */}
          <div className='p-3'>
            <NewTask addTask={(title) => onAddTask(title)}/>
          </div>
          <div className='grid grid-cols-3 gap-3'>
            {
              tasks.map(task =>
                <Tasks key={task.id} task={task} finished={task.isFinished} click={() => onClick(task.id)} />
              )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;