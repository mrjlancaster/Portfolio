import React from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import Calculator from './components/Calculator';
import Technologies from './components/Technologies';
import About from './components/About';
import Work from './components/Work';

const App = () => {
  return (
		<div className="App">
			<Header />
			<Welcome />
			<About />
			<Work />
			<Calculator />
			<Technologies />
			<Contact />
		</div>
  );
}

export default App;
