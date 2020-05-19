import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserContainer from './containers/UserContainer';
import Header from './components/Header';
import FilterFemale from './components/FilterFemale';
import FilterFemaleContainer from './containers/FilterFemaleContainer';
import FilterMaleContainer from './containers/FilterMaleContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div>
        
        <Navbar />

        <Route exact path="/" component={UserContainer} />
        <Route exact path="/filterFemale" component={FilterFemaleContainer} />
        <Route exact path="/filterMale" component={FilterMaleContainer} />
        
      </div>
    </Router>
  );
}

export default App;
