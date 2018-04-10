const accessToken = '';
const clientID = '701aca270917470d8814e2f8bc892910';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatchelse, expiresInMatch) {
      accessToken = accessTokenMatch[0];
      const expiresIn = "3600";
      window.setTimeout(() => accessToken = '', expiresIn * 1000);

      window.history.pushState('Access Token', null, '/');
      // This clears the parameters, allowing us to grab a new access token when it expires
      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  }

  search(searchTerm) {
    accessToken = Spotify.getAccessToken();
    return fetch('https://api.spotify.com/v1/search?type=track&q=TERM', {
  headers: {Authorization: `Bearer ${accessToken}`}
});
    if (response.ok) {
      let jsonResponse = await.response.json();
    }
      throw new Error('Request Failed!');
    } catch (error) {
      console.log(error);
    }
};

export default Spotify;
