import React, { Component } from 'react';
import Photo from './Photo';
import { Link } from 'react-router';

class PhotoGrid extends Component {
  renderPhotos() {
    return this.props.posts.map((p, i) =>
    <Photo
      key={Math.round(Date.now() * Math.random())}
      i={i}
      post={p}
      {...this.props}
    />);
  }

  render() {
    return (
      <div className="photo-grid">
        {this.renderPhotos()}
      </div>
    )
  }
}

export default PhotoGrid;
