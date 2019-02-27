import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SimpleSelect extends React.Component {
    state = {
      select: '',
      labelWidth: 0
    };

    componentDidMount() {
      this.setState({
        labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
      });
    }

    handleChange = (event, handleChange) => {
      this.setState({[event.target.name]: event.target.value});
      handleChange(event.target.value);
    };

    render() {
      const {classes, options, label, handleChange} = this.props;

      return (
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            {label}
          </InputLabel>
          <Select
            value={this.state.select}
            onChange={(event) => this.handleChange(event,handleChange)}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name='select'
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="" disabled>
              <em>None</em>
            </MenuItem>
            {options.map((option,index) => <MenuItem key={index} value={option.value}>{option.name}</MenuItem> )}
          </Select>
        </FormControl>
      );
    }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name:PropTypes.string
  })),
  label:PropTypes.string,
  handleChange:PropTypes.func
};

SimpleSelect.defaultProps = {
  label: 'Select'
};

export default withStyles(styles)(SimpleSelect);
