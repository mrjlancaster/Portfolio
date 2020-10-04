import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {


  return (
	  <Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path='/' exact component={Welcome} />
					<Route path='/Home' exact component={Welcome} />
					<Route path='/Projects' exact component={Projects} />
					<Route path='/Contact' exact component={Contact} />
				</Switch>
			</div>
	  </Router>
  );
}

export default App;
