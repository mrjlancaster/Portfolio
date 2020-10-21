import React from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Calculator from './components/Calculator';
import Technologies from './components/Technologies';
import About from './components/About';

const App = () => {

	
  return (
		<div className="App">
			<Header />
			<Welcome />
			{/* <About /> */}
			<Projects />
			<Calculator />
			<Technologies />
			<Contact />
		</div>
  );
}

export default App;
