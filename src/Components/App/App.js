import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

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

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  //defines adding a track to playlist
  addTrack(track) {
    if (track.id != this.playlistTracks.forEach(track.id)) {
      this.playlistTracks.push(track);
    }
  }


  //defines removing a track from playlist
  removeTrack(track) {
    this.playlistTracks.filter(existingTrack => existingTrack != track.id);
  }

  // updates Playlist Name
  updatePlaylistName(name) {
    this.state.playlistName = name;
  }

  //gathers URI info for each track
  savePlaylist() {
    let trackURIs = [this.props.track.forEach(this.props.track.uri)]
  }

  search(searchTerm) {
    console.log(searchTerm);
    this.state.searchResults = Spotify.search();
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
