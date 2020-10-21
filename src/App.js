import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
	//   <Router>
			<div className="App">
				<Header />
				<Welcome />
				{/* <About />	 */}
				<Technologies />
				<Projects />
				<Calculator />
				<Contact />
				{/* <Switch>
					<Route path='/' exact component={Welcome} />
					<Route path='/Home' exact component={Welcome} />
					<Route path='/Projects' exact component={Projects} />
					<Route path='/Contact' exact component={Contact} />
				</Switch> */}
			</div>
	//   </Router>
  );
}

export default App;
