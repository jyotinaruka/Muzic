import React from 'react'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
const SpotifyOauth = () => {

    const token = Cookies.get('spotifyAuthToken')
    
    return (
        <div>
            {token ? (
                <SpotifyApiContext.Provider value={token}>
                    {/* Your Spotify Code here */}
                    <p>You are authorized with token: {token}</p>
                </SpotifyApiContext.Provider>
            ) : (
                    
                 // Display the login page
                    <SpotifyAuth
                        redirectUri='http://localhost:3000/callback'
                        clientID='1a70ba777fec4ffd9633c0c418bdcf39'
                        scopes={[Scopes.userReadPrivate, 'user-read-email']} 
                    />
                )}
            

        </div>
    )
}

export default SpotifyOauth
