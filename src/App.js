import React, { Component } from 'react';
import './App.css';
import './Components/Component.css';

import { Profile } from './Components/Profile';
import { Education } from './Components/Education';
import { Experience } from './Components/Experience';
import { Skills } from './Components/Skills';
import { Hobbies } from './Components/Hobbies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Education />
        <Skills />
        <Experience />
        <Hobbies />
      </div>
    );
  }
}

export default App;
