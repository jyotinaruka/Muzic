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

const NewReleases = () => {
    const [results, setResults] = useState([]);
    const [play, setPlay] = useState("");

    useEffect(() => {
        Spotify.browse("new-releases")
            .then(res => {
                console.log(res.data);
                if (res.data.albums) {
                    console.log(res.data.albums)
                    setResults(res.data.albums.items);
                }
            })

    }, [])

    return (
        <Container>
            { results.length === 0 ? <div /> :
                <Segment>
                    <Item.Group divided>
                        {
                            results.map((album, index) =>
                                <Item key={index}>
                                    <Item.Image src={album.images ? album.images[0].url : ''} />
                                    <Item.Content>
                                        <Item.Header as='a'>{album.name}</Item.Header>
                                        <Item.Meta >
                                            {album.artists.map((artist) =>
                                                <span className='cinema'>{artist.name}</span>
                                            )}
                                        </Item.Meta>
                                        <Item.Description>

                                        </Item.Description>
                                        <Item.Extra>
                                            <Button onClick={(e) => setPlay(album.uri)}>
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

export default NewReleases
