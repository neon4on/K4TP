import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
<div className="wrap">
  
  <div className="arrow animated bounce"></div>
  
  <header>   
    <div className="logo"></div>
    <nav>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </header>
  
  
  <section className="transparent">
    <div className="headline"></div>
    <div className="text"></div>
    <div className="text"></div>
    <div className="button"></div>
  </section> 
  <section className="cards">
    <div className="card">
      <img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image" alt=""/>
      <div className="content">
        <div className="headline"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="button"></div>
      </div>
    </div>
    <div className="card">
      <img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image" alt=""/>
      <div className="content">
        <div className="headline"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="button"></div>
      </div>
    </div>
    <div className="card">
      <img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image" alt=""/>
      <div className="content">
        <div className="headline"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="button"></div>
      </div>
    </div>
  </section>
  
  <section className="contentbox">
    <div className="headline"></div>
    <div className="text"></div>
    <div className="text"></div>
    <div className="text"></div>
    <div className="button"></div>
  </section>
  
</div>
</div>
  
 <footer className="footer">
    <div className="logo"></div>
    <nav>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </footer>


      {/* <header> */}

        {/* <div classNameName='headerNamed'> 
          <h1>
            Get<span>Professor</span>
          </h1>
          
        </div>
        <div classNameName='wrapperUserLogin'>
            <h2>
              Login
            </h2>
            <h2>
              Registraion
            </h2>
        </div>
      </header>

      <footer>
        <button classNameNameName="read-the-docs">
          <a href="https://neon4ons-personal-organization.gitbook.io/getprofessor/">Doc</a>
        </button>
      </footer> */}
    </>
  );
}

export default App;
