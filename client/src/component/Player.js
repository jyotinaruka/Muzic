import React from 'react'
import { Container } from 'semantic-ui-react'

const Player = ({ play }) => {
    return (
        !play ? <div /> :
            <div>
                <div className="playerDivider" />
                <Container className="playerWrapper">
                    <iframe src={`https://embed.spotify.com/?uri=${play}`}
                        width="100%" height="80" frameborder="0"
                        allowtransparency="true" allow="encrypted-media"></iframe>
                </Container>
            </div>
    )
}

export default Player
