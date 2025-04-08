import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';
import Moods from './components/Moods';
import Effects from './components/Effects';
import posts from './utils/posts';
import Tasks from './components/Tasks';
import tasks from "./utils/tasks";

function App() {

  const [tasks, setTasks] = useState(tasks);
  const onClick = (id) => {

  };

  console.log("called !");
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className='pt-20 px-3 pb-3 flex-1'>
        {/* <Counter /> */}
        <div className="mb-10">
          {/* <Content posts={posts}/> */}
          {/* <Effects/> */}
          {/* <Moods/> */}
          <div className='grid grid-cols-3 gap-3'>
          {tasks.map((task) => (
              <Tasks key={task.id} task={task} finished={task.isFinished} click={() => onClick(task.id)}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;