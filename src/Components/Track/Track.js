import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <span onClick={this.removeTrack}>'-'</span>;
    }
    return <span onClick={this.addTrack}>'+'</span>;
  }

  addTrack(track) {
    this.props.onAdd(this.props.track);
  }

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
        <a className="Track-action">{this.props.renderAction}</a>
      </div>
    );
  }
}

export default Track;
