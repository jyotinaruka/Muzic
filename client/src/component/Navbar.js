import React from 'react'
import { Link, navigate } from '@reach/router'
import {

    Container,

    Icon,
    Image,

    Menu,
    Segment,

} from 'semantic-ui-react'
import logo from '../muzicLogo-small.png'

const Navbar = () => {
    return (
        <Segment className="bg" vertical>
            <Container>
                <Menu className="bg" borderless inverted size='massive'>
                    <Menu.Item as='a' className="logo">
                        <Image className="logoSize" onClick={(e) => navigate('/')} src={logo} size='medium' />
                    </Menu.Item>
                    <Menu.Menu position='right' className="bg" icon='labeled' borderless>
                        <Menu.Item as={Link} to="/newreleases">
                            <Icon name='music' />
                            New Releases
                        </Menu.Item>
                        <Menu.Item as={Link} to="/featured">
                            <Icon name='th list' />
                            Featured Playlists
                        </Menu.Item>
                        <Menu.Item as={Link} to="/searchsong">
                            <Icon name='search' />
                            Search
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>
        </Segment>
    )
}

export default Navbar
