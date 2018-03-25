import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack.bind(this);
    this.removeTrack.bind(this);
  }

  //Shows if track is either removable or to be added
  isRemoval(track) {
    if (track == this.props.playlistTracks.forEach()) {
      return true;
    }
  }

  //display option of either adding or removing track
  renderAction() {
    if (this.props.isRemoval) {
      return <a onClick={this.removeTrack}>-</a>;
    }
    return <a onClick={this.addTrack}>+</a>;
  }

  //handles addition of track
  addTrack(track) {
    this.props.onAdd(this.props.track);
  }

  //handles removal of track
  removeTrack(track) {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">{this.renderAction()}</a>
      </div>
    );
  }
}

export default Track;
