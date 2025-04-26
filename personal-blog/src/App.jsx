import { useState } from 'react';
import ThoughtDisplay from './components/ThoughtDisplay';
import ThoughtForm from './components/ThoughtForm';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'


const App = () => {
const [thoughts, setThoughts] = useState([]);

const addThought = (thoughtData) => {
  // Add the new thought with a unique id
  const newThought = { ...thoughtData, id: Date.now() };
  setThoughts([newThought, ...thoughts]); // Add new thought to the list
};

return (
<div className="p-6 min-h-screen bg-gray-100">
      <div className="mb-12">
        <Header/>
      </div>
      <div className="mb-12">
        <ThoughtForm addThought={addThought} />
      </div>
      <div>
        <ThoughtDisplay thoughts={thoughts} />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
);
};

export default App
