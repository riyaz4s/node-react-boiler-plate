import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContentArea from 'client/javascripts/components/ContentArea';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { setupApp } = this.props;
    setupApp();
  }

  render() {
    return (
      <div>
        <div className="off-canvas-wrapper">
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
            <main>
              <ContentArea/>
            </main>
            <a className="exit-off-canvas"></a>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  setupApp: PropTypes.func,
};

export default App;
