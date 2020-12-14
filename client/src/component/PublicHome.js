import React from 'react'
import { navigate } from '@reach/router'

import {
    Button,
    Container,
    Divider,
    Header,
    Icon,
} from 'semantic-ui-react'

const PublicHome = () => {

    return (
        <Container textAlign='center' text>
            <Header as='h1' content='Bringing Happiness Through muzic' inverted
                style={{
                    fontSize: '3em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '2em',
                }}
            />
            <Divider hidden />
            <Button onClick={(e) => navigate('/searchsong')} primary size='huge'>
                Get Muzic
                <Icon name='right arrow' />
            </Button>
        </Container>
    )
}

export default PublicHome
