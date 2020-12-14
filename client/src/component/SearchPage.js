import React, { useState } from 'react'
import { navigate } from '@reach/router'
import Spotify from '../component/SpotifyAPI'
import {
    Container,
    Item,
    Segment,
    Form,
    Button,
    Icon,
    Pagination,
} from 'semantic-ui-react'
import Player from './Player'

const SearchPage = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [play, setPlay] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        Spotify.search(search)
            .then(res => {
                console.log(res.data);
                if (res.data.tracks) {
                    setResults(res.data.tracks.items);
                }
            })
    }

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <Container>
            <Segment className="searchbar" size='small'>
                <Form onSubmit={submitHandler}>
                    <Form.Group inline>
                        <Form.Input onChange={searchHandler} value={search} label="Search" placeholder='Search for track' icon='search' />
                        <Button onClick={(e) => navigate('/searchsong')} type='submit' primary>Go</Button>
                    </Form.Group>
                </Form>
            </Segment>
            { results.length === 0 ? <div></div> : //remove white space
                <Segment>
                    <Item.Group divided>
                        {
                            results.map((track, index) =>
                                <Item key={index}>
                                    <Item.Image src={track.album.images ? track.album.images[0].url : ''} />
                                    <Item.Content>
                                        <Item.Header as='a' >{track.name}</Item.Header>
                                        <Item.Meta >
                                            {track.artists.map((artist) =>
                                                <span className='cinema'>{artist.name}</span>
                                            )}
                                        </Item.Meta>
                                        <Item.Description>

                                        </Item.Description>
                                        <Item.Extra>
                                            <Button onClick={(e) => setPlay(track.uri)}>
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

export default SearchPage