import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';
import { Link } from 'react-router';

class Single extends Component {
  render() {
    const { posts, params, comments } = this.props;
    const { postId } = params;
    const i = posts.findIndex((p) => p.code === postId);
    const post = posts[i];
    const postComments = comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
}

export default Single;
