import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';
import posts from './utils/posts';

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className='pt-20 px-3 pb-3 flex-1'>
        {/* <Counter /> */}
        <div className="mb-10">
          <Content posts={posts}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;