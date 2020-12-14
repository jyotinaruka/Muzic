import axios from 'axios';
import qs from 'querystring';



const api = {
  baseUrl: 'https://api.spotify.com/v1',
  authUrl: 'https://accounts.spotify.com/api/token',
  clientId: '511ebfdb56ba444c9527695daf456101',
  clientSecret: 'c520e531dd60446785f4a52b1dee4e91'
}

// browse api
const browse = async (path) => {
  // get auth token
  const { data: { access_token: token } } = await axios.post(
    api.authUrl,
    qs.stringify({ 'grant_type': 'client_credentials' }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${api.clientId}:${api.clientSecret}`)}`
      }
    }
  );

  // use token in browse api
  const res = await axios.get(
    `${api.baseUrl}/browse/${path}?locale=en_US`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return res;
}


// search api
const search = async (q) => {
  // get auth token
  const { data: { access_token: token } } = await axios.post(
    api.authUrl,
    qs.stringify({ 'grant_type': 'client_credentials' }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${api.clientId}:${api.clientSecret}`)}`
      }
    }
  );

  // use token in search api
  const res = await axios.get(
    `${api.baseUrl}/search/?q=${q}&locale=en_US&market=US&type=track`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return res;
}

const Spotify = { browse, search }

export default Spotify 