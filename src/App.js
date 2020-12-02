import logo from './logo.svg';
import './App.css';
import main from './main.js';
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

          <Bill />
          <Tip /> 


      </div>
    </Router>
  );
}

export default App;
