import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserContainer from './containers/UserContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div>
        
        <Navbar />

      
        <UserContainer />
        
        
        
      </div>
    </Router>
  );
}

export default App;
