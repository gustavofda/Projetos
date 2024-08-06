import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import MusicPlayer from './components/MusicPlayer';

const App = () => (
  <div>
    <NavBar />
    <Background />
    <Hero />
    <MusicPlayer />
  </div>
);

export default App;