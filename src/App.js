import React, { Component } from 'react';
import './App.css';
import './Components/Component.css'

import { Profile } from './Components/Profile';
import { Education } from './Components/Education';
import { Skills } from './Components/Skills';
import { Other } from './Components/Other';
import { Footer } from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Education />
        <Skills />
        <Other />
        <Footer />
      </div>
    );
  }
}

export default App;
