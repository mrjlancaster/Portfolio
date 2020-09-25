import React from 'react';
import './App.css'
import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
		 <Header />
		 {/* <Welcome /> */}
		 {/* <Projects /> */}
		 <Contact />
    </div>
  );
}

export default App;
