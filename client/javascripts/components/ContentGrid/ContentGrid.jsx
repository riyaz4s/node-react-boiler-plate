import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ContentGrid.style';

const ContentGrid = ({ className, tag, children, ...props }) =>
  React.createElement(
    tag, {
      className: classnames('content-grid', className),
      ...props
    }, children
  );

ContentGrid.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node
};

ContentGrid.defaultProps = {
  tag: 'div'
};

export default ContentGrid;
