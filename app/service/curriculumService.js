const curriculumApi = require('../api/curriculumApi');


const getSubjectList = async () => {
  const response = await curriculumApi.getSubjectList();
  if(response) {
    const subList = response.subjects;
    return subList.map(sub => ({
      name: sub,
      value: sub
    }));
  }
  else {
    throw ({err: 'response NA'});
  }
};

const getChapterList = async (subject) => {
  const response = await curriculumApi.getChapterList(subject);
  if(response) {
    return response.chapters;
  }
  else {
    throw ({err: 'response NA'});
  }
};

module.exports = {
  getSubjectList,
  getChapterList
};