import React from 'react';
import Track from '../Track/Track'
import './TrackList.css';

//addTrack passed from SearchResults

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track key={track.id} track={track} onAdd={this.props.addTrack} onRemove={this.props.removeTrack}/>;
        })}
      </div>
    );
  }
}

export default TrackList;
