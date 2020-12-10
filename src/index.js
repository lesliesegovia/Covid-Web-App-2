import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import About from "./about"
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 

ReactDOM.render(
  <Router>
    <Switch> 
            <Route exact path='/' component={App}></Route> 
            <Route exact path='/about' component={About}></Route> 
    </Switch> 
  </Router>,
  document.getElementById('root')
);


