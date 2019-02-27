import React from 'react';
import Select from '../Select';
import ContentGrid from '../ContentGrid';
import PropTypes from 'prop-types';
import Card from '../Card';
import './Curriculum.style.scss';

const Curriculum = ({subjects, getChapterWithTopics, chapters}) => {
  return (
    <ContentGrid>
      <Select options={subjects} label={'Subject'} handleChange={(subject) => getChapterWithTopics(subject)}/>
      <hr/>
      {chapters && <div className={'card-container'}>
        {chapters.map((chapter, i) => <Card key={i} className={'card-item'} title={Object.keys(chapter)[0]} topics={Object.values(chapter)[0]}/>)}
      </div>
      }
    </ContentGrid>
  );
};

Curriculum.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string
  })),
  chapters: PropTypes.arrayOf(PropTypes.object),
  getChapterWithTopics: PropTypes.func
};

Curriculum.defaultProps = {
  subjects: []
};

export default Curriculum;
