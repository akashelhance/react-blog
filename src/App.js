import logo from './logo.svg';
import './App.css';
import About from './containers/About/About';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (

    <Router>
    <div className="App">

      <Header/>
      <Hero/>
   
    </div>

    </Router>
  );
}

export default App;
