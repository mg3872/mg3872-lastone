
import React from 'react';
import Playlist from './Playlist';
import './App.css';
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand" />


const App = () => {
  return (
    <div className="app-container">
      <h1 className="playlistTitle">Matt Gisin's Playlist</h1>
      <p className="buttons"> 
      </p>
      <Playlist />
    </div>
  );
};


export default App;