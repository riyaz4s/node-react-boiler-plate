import http from './http';

export const getSub = () => {
  return http.get('/subjects').then(res => res.data);
};