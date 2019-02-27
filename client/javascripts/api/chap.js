import http from './http';

export const getChapter = (subject) => {
  return http.get(`/chapters/${subject}`).then(res => res.data);
};