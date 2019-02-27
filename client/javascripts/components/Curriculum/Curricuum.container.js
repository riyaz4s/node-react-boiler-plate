import { connect } from 'react-redux';
import {
  getChapterList,
} from '../../actions';


const mapStateToProps = ({sub, chap={}}) => {
  return {
    subjects:sub.subjects,
    chapters:chap.chapters
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getChapterWithTopics: (subject) => {
      dispatch(getChapterList(subject));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);