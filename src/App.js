import React from 'react';
import './App.css';

// Components imports
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Work from './components/Work';
import Calculator from './components/Calculator';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

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
