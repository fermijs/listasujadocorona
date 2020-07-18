import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { mockedPoliticanList } from './mockedPoliticanList';

import PoliticianCard from '../PoliticianCard';

const Wrapper = styled.section`
    display: block;
    margin: 0 auto;
    max-width: 1380px;
    padding: 40px;
`;

const Container = styled.div`
    display: grid;
    grid-gap: 1rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
`;

export default class PoliticiansList extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            politicians: []
        }
    }

    componentDidMount() {
        return new Promise(() => {
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    politicians: mockedPoliticanList
                });
            }, 2000);
        });
    }

    renderCards(politicians, isLoading) {
        return politicians.map((politician, index) => (
            <a
                key={isLoading ? `loading-${index}` : politician.id}
                style={{
                    pointerEvents: isLoading ? 'none' : 'auto',
                    textDecoration: 'none'
                }}
                href={`detalhes/${politician.id}`}
            >
                <PoliticianCard
                    politician={politician}
                    isLoading={isLoading}
                />
            </a>
        ));
    }

    render() {
        const { isLoading } = this.state;
        const data = isLoading ? mockedPoliticanList : this.state.politicians;

        return (
            <Wrapper>
                <Container>
                    {this.renderCards(data, isLoading)}
                </Container>
            </Wrapper>
        );
    }
}
