import React from 'react';
import UserContainer from './containers/UserContainer';
import Header from './components/Header';
import FilterFemale from './components/FilterFemale';
import FilterFemaleContainer from './containers/FilterFemaleContainer';


function App() {
  return (
    <div>
      <Header />
      <FilterFemaleContainer />
      <UserContainer />
    </div>

  );
}

export default App;
