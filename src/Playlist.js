import React, { useEffect, useState } from 'react';
import Song from './Song';
import Podcast from './Podcast';
import './App.css';
import ShuffleButton from './ShuffleButton.js';
import BackButton from './BackButton.js';
import PlayButton from './PlayButton.js';
import NextButton from './NextButton.js';

const Playlist = () => {
  
  const [playlist, setPlaylist] = useState([]);

  const getSongs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/mg3872/info655-gisin4/main/src/audio_tracks.json");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        setPlaylist(data.tracks);
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
  };

  useEffect (getSongs, []);

  const shufflePlaylist = () => {
    let shuffledPlaylist = [...playlist];
    shuffledPlaylist.sort(() => Math.random() - 0.5);
  setPlaylist(shuffledPlaylist);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [nowPlaying, setNowPlaying] = useState('');
  const [nowPlayingIndex, setNowPlayingIndex] = useState(0);

  const playPauseSong = () => {
    if (isPlaying) {
      setNowPlaying('Paused');
      setIsPlaying(false);
    } else {
      const playingTitle = 'title' in playlist[nowPlayingIndex] ? playlist[nowPlayingIndex].title : playlist[nowPlayingIndex].episodeTitle;
      setNowPlaying(`Playing: ${playingTitle}`);
      setIsPlaying(true);
    }
  };

const handleDoubleClick = (title, episodeTitle, index) => {
  setNowPlayingIndex(index);
  if (title) {
    setNowPlaying(`Playing: ${title}`);
  } else if (episodeTitle) {
    setNowPlaying(`Playing: ${episodeTitle}`);
  }
};

const nextSong = () => {
  let nextIndex = nowPlayingIndex + 1;
  if (nextIndex >= playlist.length) {
    nextIndex = 0;
  }
  setNowPlayingIndex(nextIndex);
  const nextTrack = playlist[nextIndex];
  const playingTitle = 'title' in nextTrack ? nextTrack.title : nextTrack.episodeTitle;
  setNowPlaying(`Playing: ${playingTitle}`);
};

const backSong = () => {
  let prevIndex = nowPlayingIndex - 1;
  if (prevIndex < 0) {
    prevIndex = playlist.length - 1;
  }
  setNowPlayingIndex(prevIndex);
  const previousTrack = playlist[prevIndex];
  const playingTitle = 'title' in previousTrack ? previousTrack.title : previousTrack.episodeTitle;
  setNowPlaying(`Playing: ${playingTitle}`);
};
  
const ShuffleButton = ({ action }) => {
  return <button onClick={action}>Shuffle</button>;
};
const BackButton = ({ action }) => {
  return <button onClick={action}>Back</button>;
};
const PlayButton = ({ action }) => {
  return <button onClick={action}>Play/Pause</button>;
};

const NextButton = ({ action }) => {
  return <button onClick={action}>Next</button>;
};

   return (
    <div>
    <div className="toolbar">
    <ShuffleButton action={shufflePlaylist} />
    <BackButton action={backSong} />
    <PlayButton action={playPauseSong} />
    <NextButton action={nextSong} />
    </div>

    <div className="status">
      {nowPlaying}
    </div>
  
    {playlist.map((item, index) => {
      if ('artist' in item) {
        return <Song key={index} {...item} onDoubleClick={() => handleDoubleClick(item.title, null, index)} />;
      } else {
        return <Podcast key={index} {...item} onDoubleClick={() => handleDoubleClick(null, item.episodeTitle, index)} />;
      }
    })}

      </div>
    );
  };

export default Playlist;