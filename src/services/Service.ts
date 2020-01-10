import axios from 'axios';

import EntryModel from '../models/entryModel';

const service = axios.create({
  baseURL: 'http://localhost:8080',
  // headers: {csrf: 'token'},
  timeout: 1000, 
});

// const handleSuccess = (response) => { return response; }

//const handleError = (error) => {
//  if (!error.response)
//    return

//  return Promise.reject(error)
//}

//service.interceptors.response.use(handleSuccess, handleError);

export const getEntries = async () : Promise<EntryModel[]> => {
  const { data: entriesData } = await service.get("entries");
  return entriesData;
}

export default service;