import React, {useState} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom"
import './App.css';
import LogInEmploy from './components/LogInEmploy/LogInEmploy';
import EmploysWall from './components/EmploysWall/EmploysWall';

function App() {
  const [employ, setEmploy] = useState([]);
  const [registerEm, setRegisterEm]= useState([]);
  return (
    <div className="App">
    <Router>
  <Switch>
 
  <Route path="/administrador">
    
  </Route>
  <Route path="/empleados">
  <EmploysWall
  registerEm={registerEm}/>
  </Route>
  <Route path="/usuarios">
   
  </Route>
  <Route path="/LoginWorker">
    <LogInEmploy
    employ={employ}
    setEmploy={setEmploy}
    setRegisterEm={setRegisterEm}/>
  </Route>
  
</Switch>
</Router>
    </div>
  );
}

export default App;
