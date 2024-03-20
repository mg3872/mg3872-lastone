import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StatusBar from './StatusBar';

describe('StatusBar component', () => {
  it('displays the correct information when an Audio component is double-clicked', () => {
    const audioData = {
        "tracks": [
          {
            "title": "Billie Jean",
            "artist": "Michael Jackson",
            "year": 1983
          },
          {
            "title": "Smells Like Teen Spirit",
            "artist": "Nirvana",
            "year": 1991
          },
          {
            "artist": "Rick Astley",
            "year": 1987,
            "title": "Never Gonna Give You Up"
          },
          {
            "episode": 360,
            "episodeTitle": "Switched at Birth"
          },
          {
            "season": 7,
            "episode": 2,
            "episodeTitle": "How to Fail: Malcolm Gladwell"
          },
          {
            "episode": 5,
            "season": 1,
            "episodeTitle": "Route Talk"
          },
          {
            "artist": "Nathan Evans",
            "year": 2021,
            "title": "Wellerman",
            "genre": "Folk"
          },
          {
            "artist": "John D. Smith",
            "year": 2003,
            "title": "Podcasts Are Overrated"
          },
          {
            "podcast": "The Moth",
            "episodeTitle": "The Moth Presents Anthony Griffith"
          },
          {
            "episode": 7,
            "episodeTitle": "Vocational Wheel"
          },
          {
            "artist": "Rebecca Black",
            "year": 2011,
            "title": "Friday"
          },
          {
            "season": 1,
            "episode": 2,
            "episodeTitle": "John D. Smith is a Subpar Musician",
            "year": 2004
          },
          {
            "episode": 52,
            "episodeTitle": "The Grim Adventurs of Billy and Mandy"
          },
          {
            "artist": "Taylor Swift",
            "year": 2023,
            "title": "Cruel Summer"
          }
        ]
      }

    const { getByTestId, getByText } = render(<StatusBar />);

    const statusBar = getByTestId('status-bar');

    // Simulate double-clicking the Audio component
    fireEvent.doubleClick(statusBar);

    // Get the first track from audioData
    const firstTrack = audioData.tracks[0];

    expect(getByText(firstTrack.title)).toBeInTheDocument();
    expect(getByText(firstTrack.artist)).toBeInTheDocument();
    expect(getByText(firstTrack.year.toString())).toBeInTheDocument();
  });
});
