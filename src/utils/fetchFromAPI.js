import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {

  url: BASE_URL  ,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'd5e3aa28ebmsh4aa1a93d3273c5ap13267bjsnbc312d499991',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};