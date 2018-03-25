const accessToken = '';

const Spotify = {
  getAccessToken() {
    if (accessToken != '') {
      return accessToken;
    } else if (window.location.href.match() == /access_token=([^&]*)/,
      /expires_in=([^&]*)/)) {
      accessToken = /access_token=([^&]*)/;
      expTime = /expires_in=([^&]*)/;
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
window.history.pushState('Access Token', null, '/');
    }
  }
};

export default Spotify;
