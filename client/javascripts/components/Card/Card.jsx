import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import './Card.style.scss';
import classnames from 'classnames';

const styles = theme => ({
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  container: {
    position: 'absolute',
    overflow: 'hidden',
    height:'100%'
  },
  wrapper: {
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100%'
  }
});

class ChapterCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
      const {title, topics} = this.props;
      const avatar = title[0].toUpperCase();
      return (<div className={'card-container-inner'}>
        <div className = "left"/>
        <div className="right"/>
        <div className = "card">
          <div className = "front">
            <CardHeader
              avatar={
                <Avatar className='avatar'>
                  {avatar}
                </Avatar>
              }
              title={title}
            />
          </div>
          <div
            className = "back">
            <div className='content'>
              <div className={'viewport'}>
                <ul>
                  {topics.map((topic, i) => <li key={i}>{topic}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}

ChapterCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string
};

export default withStyles(styles)(ChapterCard);
