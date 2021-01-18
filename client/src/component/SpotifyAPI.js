import axios from 'axios';
import qs from 'querystring';


const api = {
  baseUrl: 'https://api.spotify.com/v1',
  authUrl: 'https://accounts.spotify.com/api/token',
  clientId: '511ebfdb56ba444c9527695daf456101',
  clientSecret: 'c520e531dd60446785f4a52b1dee4e91'
}

const getAppToken = async () => {
  // check token in storage.
  var tokenFromStore = localStorage.getItem("muzic-spotify-app-token");
  if (tokenFromStore) {
    return tokenFromStore;
  }

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
  return token;
}

const getUserToken = async () => {
  // 1. If we have token in store, use it
  var tokenFromStore = localStorage.getItem("muzic-spotify-user-token");
  if (tokenFromStore) {
    return tokenFromStore;
  }

  // 2. If we don't have token, then request auth token from spotify
  const params = qs.stringify(
    {
      'client_id': api.clientId,
      'response_type': 'code',
      'redirect_uri': 'http://localhost:3000/handleauth',
      'scope': ['user-read-private'],
      //'state': '34fFs29kd09'
    }
  )

  const authReqURL = `https://accounts.spotify.com/authorize?${params}`

  const currentURL = window.location.href;
  localStorage.setItem("muzic-last-url", currentURL);

  window.location.href = authReqURL;
}

// browse api
const browse = async (path) => {
  // get auth token
  const token = await getAppToken();

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
  const token = await getAppToken();

  // use token in search api
  const res = await axios.get(
    `${api.baseUrl}/search/?q=${q}&locale=en_US&market=US&type=track`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return res;
}

const Spotify = { browse, search }

export default Spotify 