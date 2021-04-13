import logo from './logo.svg';
import './App.css';
import About from './containers/About/About';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
   
    </div>
  );
}

export default App;
