let accessToken = '';
const clientID = '701aca270917470d8814e2f8bc892910';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = "3600";

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      // This clears the parameters, allowing us to grab a new access token when it expires
      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },

  search(searchTerm) {
    accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
  headers: {Authorization: `Bearer ${accessToken}`}
  }).then(response => {
      return response.json();
  }).then(jsonResponse => {
    if (!jsonResponse.tracks) {
      return [];
    }
    //creates a list of track objects with the following properties
    return jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      URI: track.uri
      }));
    });
  },

  savePlaylist(playlistName, trackURIs) {
    if (!playlistName || !trackURIs) {
      return;
    }
    accessToken = Spotify.getAccessToken();
    let headers = {'Authorization': 'Bearer ' + accessToken};
    let userID = '';
    return fetch('https://api.spotify.com/v1/me', {headers: headers
      }).then(response => response.json()
      ).then(jsonResponse => {
        //returns user's Spotify Username
        userID = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({name: playlistName})
        }).then(response => response.json()
      ).then(jsonResponse => {
        //creates new playlist in user's account
        let playlistID = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({URIs : trackURIs})
        });
      })
    });
  }

};

export default Spotify;
