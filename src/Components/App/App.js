import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Hard-coded search results
    this.state = {
      searchResults: [
        {
          name: 'Fractured',
          artist: 'RED',
          album: 'Gone'
        },
        {
          name: 'E for Extinction',
          artist: 'Thousand Foot Krutch',
          album: 'Welcome to the Masquerade'
        },
        {
          name: 'Patience',
          artist: 'Demon Hunter',
          album: 'Outlive'
        }
      ],
      playlistName: 'Blood and Sweat',
      playlistTracks: [
        {
          name: 'Fractured',
          artist: 'RED',
          album: 'Gone'
        },
        {
          name: 'E for Extinction',
          artist: 'Thousand Foot Krutch',
          album: 'Welcome to the Masquerade'
        },
        {
          name: 'Patience',
          artist: 'Demon Hunter',
          album: 'Outlive'
        }
      ]
    };
    this.addTrack.bind(this);
    this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (track.id != this.playlistTracks.forEach(track.id)) {
      this.playlistTracks.push(track);
    }
  }

  removeTrack(track) {
    this.playlistTracks.filter(existingTrack => existingTrack != track.id);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
