import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  const users = [
    { name: "Nikhil", about: "Creative coder, caffeine-powered." },
    { name: "Ananya", about: "UI/UX designer, loves gradients." },
    { name: "Ravi", about: "Backend dev, database whisperer." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className='pt-20 px-3 pb-3 flex-1'>
        <Counter />
        <div className="grid grid-cols-3">
          {users.map(user => <Content name={user.name} about={user.about}/>)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
