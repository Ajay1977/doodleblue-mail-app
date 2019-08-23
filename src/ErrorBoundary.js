import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    console.log(props);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-container'>
          <h1 style={{ margin: '10px 0px' }}>Oops!!! Something went wrong.</h1>
          <h3 style={{ margin: '10px 0px' }}>Click below to go to Home page</h3>
          <button style={{ margin: '10px 0px', maxWidth: '200px' }} id="createAccBtn" onClick={() => { this.props.history.push('/'); document.location.reload(); }}>Go to HomePage</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);