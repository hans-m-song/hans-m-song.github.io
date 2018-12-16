import React, { Component } from 'react';
import './App.css';

import { Profile } from './Components/Profile';
import { Education } from './Components/Education';
import { Skills } from './Components/Skills';
import { Other } from './Components/Other';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Education />
        <Skills />
        <Other />
      </div>
    );
  }
}

export default App;
