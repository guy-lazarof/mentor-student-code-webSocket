import { httpService } from './http.service.js';

const BASE_URL = 'code/'

export const codeService = {
  query,
  get,

}

function query() {
  return httpService.get(BASE_URL)
}


function get(codeId) {
  return httpService.get(BASE_URL + codeId)
}

