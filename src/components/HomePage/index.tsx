import React from 'react';

import Header from '../Header/index';

import { Container } from './styles';

type HomePage = {
    
}

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
        </Container>
    );
}

export default Home;