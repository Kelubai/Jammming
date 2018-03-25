const accessToken = '';
const clientID = '701aca270917470d8814e2f8bc892910';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
  getAccessToken() {
    if (accessToken != '') {
      return accessToken;
    } else if (window.location.href.match() == /access_token=([^&]*)/,
      /expires_in=([^&]*)/)) {
      accessToken = /access_token=([^&]*)/;
      expTime = /expires_in=([^&]*)/;
      expires_in = "3600";
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    }
  }
};

export default Spotify;
