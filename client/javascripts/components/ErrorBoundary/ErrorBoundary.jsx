import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      info: undefined
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error });
    this.setState({ info });
  }

  render() {
    const error = this.state.error;
    if (error) {
      return  <React.Fragment>
        <h2>Something went wrong.</h2>
        <p>
          {error.toString()}
        </p>
      </React.Fragment>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  logError: PropTypes.func
};

export default ErrorBoundary;
