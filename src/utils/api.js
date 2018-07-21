import request from './request';

export const getData = (params) => {
  return request.post('/api/tags/tag',params);
}
