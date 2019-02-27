import { connect } from 'react-redux';
import {
  getSubjectList,
} from '../../actions';


const mapStateToProps = state => state;

const mapDispatchToProps = function(dispatch) {
  return {
    setupApp: () => {
      dispatch(getSubjectList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);