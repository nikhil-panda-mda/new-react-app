import { useState } from 'react'
import image from './assets/images/image.png';
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';
import Counter from './components/Counter';
import LikeButton from './components/likeButton';
import posts from './utils/posts';

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className='pt-20 px-3 pb-3 flex-1'>
        <Counter />
        <div className="grid grid-cols-3">
          <Content/>
        </div>
      </div>
      <LikeButton/>
      <Footer />
    </div>
  );
}

export default App;
