import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class PlayList extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.props.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.removeTrack}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;
