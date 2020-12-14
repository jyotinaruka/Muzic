import React, { useEffect, useState } from 'react'
import Spotify from './SpotifyAPI'
import {
    Container,
    Item,
    Segment,
    Button,
    Icon,
} from 'semantic-ui-react'
import Player from './Player'

const FeaturedPlaylist = () => {
    const [results, setResults] = useState([]);
    const [play, setPlay] = useState("");

    useEffect(() => {
        Spotify.browse("featured-playlists")
            .then(res => {
                console.log(res.data);
                if (res.data.playlists) {
                    console.log(res.data.playlists)
                    setResults(res.data.playlists.items);
                }
            })

    }, [])

    return (
        <Container>
            { results.length === 0 ? <div /> :
                <Segment>
                    <Item.Group divided>
                        {
                            results.map((playlist, index) =>
                                <Item key={index}>
                                    <Item.Image src={playlist.images ? playlist.images[0].url : ''} />
                                    <Item.Content>
                                        <Item.Header as='a'>{playlist.name}</Item.Header>
                                        <Item.Meta >
                                            <span className='cinema'>{playlist.owner.display_name}</span>
                                        </Item.Meta>
                                        <Item.Description>

                                        </Item.Description>
                                        <Item.Extra>
                                            <Button onClick={(e) => setPlay(playlist.uri)}>
                                                <Icon name='play' /> Play</Button>
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            )
                        }
                    </Item.Group>

                </Segment>
            }
            <Player play={play} />
        </Container>
    )
}

export default FeaturedPlaylist
