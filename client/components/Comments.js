import React, { Component } from 'react';

class Comments extends Component {
  renderComments() {
    return this.props.postComments.map((c, i) =>
    <div className="comment" key={i}>
      <p>
        <strong>{c.user}</strong>
        {c.text}
        <button className="remove-comment" onClick={() => this.props.removeComment(this.props.params.postId, i)}>&times;</button>
      </p>
    </div>)
  }

  handleSubmit(e) {
    e.preventDefault();
    const postId = this.props.params.postId;
    const author = this.author.value;
    const comment = this.comment.value;

    this.props.addComment(postId, author, comment);
    this.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.renderComments()}
        <form onSubmit={this.handleSubmit.bind(this)} ref={(form) => this.commentForm = form} className="comment-form">
          <input type="text" placeholder="author" ref={(author) => this.author = author} />
          <input type="text" placeholder="comment" ref={(comment) => this.comment = comment} />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments;
