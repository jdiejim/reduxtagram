import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    return (
      <main>
        <h1>
          <Link to="/">Reduxtragram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </main>
    )
  }
}

export default Main;
