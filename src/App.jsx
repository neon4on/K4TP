import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header></header>
      <h1>
        Get<span>Professor</span>
      </h1>
      <button className="read-the-docs">
        <a href="https://neon4ons-personal-organization.gitbook.io/getprofessor/">Doc</a>
      </button>
    </>
  );
}

export default App;
